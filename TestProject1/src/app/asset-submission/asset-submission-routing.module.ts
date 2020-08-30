import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetSubmissionPage } from './asset-submission.page';

const routes: Routes = [
  {
    path: '',
    component: AssetSubmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetSubmissionPageRoutingModule {}
