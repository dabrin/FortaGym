import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestartPageRoutingModule } from './restart-routing.module';

import { RestartPage } from './restart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestartPageRoutingModule
  ],
  declarations: [RestartPage]
})
export class RestartPageModule {}
