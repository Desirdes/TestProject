import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'asset-submission',
    loadChildren: () => import('./asset-submission/asset-submission.module').then( m => m.AssetSubmissionPageModule)
  },
  {
    path: 'view-asset',
    loadChildren: () => import('./view-asset/view-asset.module').then( m => m.ViewAssetPageModule)
  },
  {
    path: 'delete-asset',
    loadChildren: () => import('./delete-asset/delete-asset.module').then(m => m.DeleteAssetPageModule)
  },
  {
    path: 'asset-storage',
    loadChildren: () => import('./asset-storage/asset-storage.module').then( m => m.AssetStoragePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
