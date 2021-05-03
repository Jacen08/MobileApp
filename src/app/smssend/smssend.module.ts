import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmssendPageRoutingModule } from './smssend-routing.module';

import { SmssendPage } from './smssend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmssendPageRoutingModule
  ],
  declarations: [SmssendPage]
})
export class SmssendPageModule {}
