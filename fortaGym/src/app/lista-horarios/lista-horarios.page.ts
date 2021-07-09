import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.page.html',
  styleUrls: ['./lista-horarios.page.scss'],
})
export class ListaHorariosPage implements OnInit {

  @Input()arr;
  @Input()dia;


  constructor(private modal:ModalController) { }

  ngOnInit() {

  }

  dismiss(){
    this.modal.dismiss()
  }
  show(val){
    console.log(val)
  }
}
