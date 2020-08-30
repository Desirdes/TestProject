import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetSubmissionPageRoutingModule } from './asset-submission-routing.module';

import { AssetSubmissionPage } from './asset-submission.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AssetSubmissionPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [AssetSubmissionPage]
})
export class AssetSubmissionPageModule {}
