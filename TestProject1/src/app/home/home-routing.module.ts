import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../asset-submission/asset-submission.module').then(m => m.AssetSubmissionPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../view-asset/view-asset.module').then(m => m.ViewAssetPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../delete-asset/delete-asset.module').then(m => m.DeleteAssetPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
