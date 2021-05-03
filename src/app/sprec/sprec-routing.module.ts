import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SprecPage } from './sprec.page';

const routes: Routes = [
  {
    path: '',
    component: SprecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprecPageRoutingModule {}
