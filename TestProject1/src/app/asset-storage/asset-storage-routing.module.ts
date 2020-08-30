import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetStoragePage } from './asset-storage.page';

const routes: Routes = [
  {
    path: '',
    component: AssetStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetStoragePageRoutingModule {}
