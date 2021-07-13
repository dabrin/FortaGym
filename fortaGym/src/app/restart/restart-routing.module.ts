import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestartPage } from './restart.page';

const routes: Routes = [
  {
    path: '',
    component: RestartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestartPageRoutingModule {}
