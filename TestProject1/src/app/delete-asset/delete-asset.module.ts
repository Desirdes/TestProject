import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAssetPageRoutingModule } from './delete-asset-routing.module';

import { DeleteAssetPage } from './delete-asset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAssetPageRoutingModule
  ],
  declarations: [DeleteAssetPage]
})
export class DeleteAssetPageModule {}
