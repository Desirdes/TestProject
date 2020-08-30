import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAssetPage } from './delete-asset.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAssetPageRoutingModule {}
