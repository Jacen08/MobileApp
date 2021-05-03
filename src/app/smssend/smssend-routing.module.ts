import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmssendPage } from './smssend.page';

const routes: Routes = [
  {
    path: '',
    component: SmssendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmssendPageRoutingModule {}
