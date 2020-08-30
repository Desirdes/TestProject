import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetStoragePageRoutingModule } from './asset-storage-routing.module';

import { AssetStoragePage } from './asset-storage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetStoragePageRoutingModule
  ],
  declarations: [AssetStoragePage]
})
export class AssetStoragePageModule {}
