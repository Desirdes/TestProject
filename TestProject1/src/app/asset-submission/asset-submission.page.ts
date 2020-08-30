import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;

@Component({
  selector: 'app-asset-submission',
  templateUrl: './asset-submission.page.html',
  styleUrls: ['./asset-submission.page.scss'],
})
export class AssetSubmissionPage implements OnInit {
  catVal: '';
  nameVal: '';
  dateValBase = '';
  tagVals = [];

  nullCheck = true;

  constructor(public actionSheet: ActionSheetController) {}
  ngOnInit() {
    this.nullChecker();
  }

  async submitAsset(a, b, c, d) {
    const actionSheet = await this.actionSheet.create({
      header: 'Submit Asset',
      mode: 'ios',
      buttons: [{
        text: 'Confirm',
        role: 'destructive',
        handler: () => {
          this.setItem(a, b, c, d);
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
    await actionSheet.present();
  }

  async submitFirstAsset(a, b, c, d) {
    const actionSheet = await this.actionSheet.create({
      header: 'Submit First Asset',
      mode: 'ios',
      buttons: [{
        text: 'Confirm',
        role: 'destructive',
        handler: () => {
          this.setFirstItem(a, b, c, d);
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
    await actionSheet.present();
  }

  async setItem(a, b, c, d){
    const oldItemsGet = await Storage.get({key: 'assets'});
    const oldItems = JSON.parse(oldItemsGet.value);
    const newAsset = [
      {category: a},
      {name: b},
      {date: c},
      {tags: d}
    ];
    const newItems = [newAsset, ...oldItems];
    const newItemsSet = JSON.stringify(newItems);
    await Storage.set({
      key: 'assets',
      value: newItemsSet
    });
  }

  async setFirstItem(a, b, c, d){
    const newAsset = [[
      {category: a},
      {name: b},
      {date: c},
      {tags: d}]
    ];
    const newItemsSet = JSON.stringify(newAsset);
    await Storage.set({
      key: 'assets',
      value: newItemsSet
    });
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

  async clearInput(){
    this.catVal = '';
    this.nameVal = '';
    this.dateValBase = '';
    this.tagVals = [];
  }
}
