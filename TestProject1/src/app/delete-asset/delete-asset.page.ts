import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';
import {ActionSheetController} from '@ionic/angular';

const {Storage} = Plugins;

@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.page.html',
  styleUrls: ['./delete-asset.page.scss'],
})
export class DeleteAssetPage implements OnInit {

  nullCheck = true;
  assetList = {
    assets: []
  };

  constructor(public actionSheet: ActionSheetController) {}
  ngOnInit(){
    this.nullChecker();
    this.getAssets();
  }

  async clearAssets() {
    const actionSheetClear = await this.actionSheet.create({
      header: 'Remove All Storage',
      mode: 'ios',
      buttons: [{
        text: 'Confirm Clear',
        role: 'destructive',
        handler: () => {
          this.clearStorage();
          console.log('Confirm clicked');
          window.location.reload();
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetClear.present();
  }

  async removeAsset(x) {
    const actionSheetRemove = await this.actionSheet.create({
      header: 'Remove This Asset',
      mode: 'ios',
      buttons: [{
        text: 'Confirm Removal',
        role: 'destructive',
        handler: () => {
          this.removeItem(x);
          console.log('Confirm clicked');
          window.location.reload();
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetRemove.present();
  }

  async removeItem(x){
    const index = this.assetList.assets.indexOf(x);
    const test = this.assetList.assets.splice(index, 1);
    console.log(test);
    const updateAssets = JSON.stringify(this.assetList.assets);
    await Storage.set({
      key: 'assets',
      value: updateAssets
     });
  }

  async clearStorage(){
    await Storage.clear();
  }

  async getAssets(){
    const assets = await Storage.get({key: 'assets'});
    this.assetList.assets = JSON.parse(assets.value);
    console.log(this.assetList);
  }

  async nullChecker(){
    const assets = await Storage.get({key: 'assets'});
    if (JSON.parse(assets.value) === null){
      this.nullCheck = true;
    }else{
      this.nullCheck = false;
    }
    console.log(JSON.parse(assets.value));
  }

  async selectedAsset(x, y){
    const assetSelectId = JSON.stringify(x);
    const assetSelectIdNumber = y;
    await Storage.set({
      key: 'selectedAsset',
      value: assetSelectId
    });
    await Storage.set({
      key: 'selectedAssetNumber',
      value: assetSelectIdNumber
    });
  }
}
