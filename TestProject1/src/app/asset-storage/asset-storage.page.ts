import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {ActionSheetController, NavController} from '@ionic/angular';

const {Storage} = Plugins;

@Component({
  selector: 'app-asset-storage',
  templateUrl: './asset-storage.page.html',
  styleUrls: ['./asset-storage.page.scss'],
})
export class AssetStoragePage implements OnInit {
  catVal: '';
  nameVal: '';
  dateValBase = '';
  tagVals = [];

  assetList = {
    assets: []
  };
  selAsset = {
    assets: []
  };
  pendEdit = {
    assets: []
  };

  selCat: '';
  selName: '';
  selDate: '';
  selTags: [];

  selIndex = 0;

  constructor(public actionSheet: ActionSheetController, public navCtrl: NavController) {}

  ngOnInit(){
    this.getAssets();
    this.getSelectAsset();
    this.getSelIndex();
  }

  async editSelAsset(a, b, c, d) {
    const actionSheet = await this.actionSheet.create({
      header: 'Submit Edit',
      mode: 'ios',
      buttons: [{
        text: 'Confirm Edit',
        role: 'destructive',
        handler: () => {
          this.editSelItem(a, b, c, d);
          console.log('Confirm clicked');
          this.navCtrl.navigateRoot('/home');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async goHome() {
    const actionSheet = await this.actionSheet.create({
      header: 'Return Without Edit',
      mode: 'ios',
      buttons: [{
        text: 'Confirm Return',
        role: 'destructive',
        handler: () => {
          console.log('Confirm clicked');
          this.navCtrl.navigateRoot('/home');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async editSelItem(a, b, c, d){
    this.pendEdit.assets = [[
      {category: a},
      {name: b},
      {date: c},
      {tags: d}]
    ];
    const temp = this.assetList.assets.splice(this.selIndex, 1, this.pendEdit.assets[0]);
    console.log(temp);
    console.log(this.assetList.assets);
    const updateAssets = JSON.stringify(this.assetList.assets);
    await Storage.set({
      key: 'assets',
      value: updateAssets
    });
  }

  async getAssets(){
    const assets = await Storage.get({key: 'assets'});
    this.assetList.assets = JSON.parse(assets.value);
    console.log(this.assetList);
  }

  async getSelectAsset(){
    const assets = await Storage.get({key: 'selectedAsset'});
    this.selAsset.assets = JSON.parse(assets.value);
    this.selCat = this.selAsset.assets[0].category;
    this.selName = this.selAsset.assets[1].name;
    this.selDate = this.selAsset.assets[2].date;
    this.selTags = this.selAsset.assets[3].tags;
    console.log(this.selAsset);
  }

  async getSelIndex(){
    const temp = await Storage.get({key: 'selectedAssetNumber'});
    this.selIndex = JSON.parse(temp.value);
    console.log(this.selIndex);
  }
}
