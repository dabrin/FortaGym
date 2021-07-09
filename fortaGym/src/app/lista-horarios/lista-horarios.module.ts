import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaHorariosPageRoutingModule } from './lista-horarios-routing.module';

import { ListaHorariosPage } from './lista-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaHorariosPageRoutingModule
  ],
  declarations: [ListaHorariosPage]
})
export class ListaHorariosPageModule {}
