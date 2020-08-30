import { Component, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';


const {Storage} = Plugins;

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.page.html',
  styleUrls: ['./view-asset.page.scss'],
})
export class ViewAssetPage implements OnInit {

  nullCheck = true;
  assetList = {
    assets: []
  };

  constructor() {}
  ngOnInit(){
    this.nullChecker();
    this.getAssets();
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
}
