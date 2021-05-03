import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SprecPageRoutingModule } from './sprec-routing.module';

import { SprecPage } from './sprec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SprecPageRoutingModule
  ],
  declarations: [SprecPage]
})
export class SprecPageModule {}
