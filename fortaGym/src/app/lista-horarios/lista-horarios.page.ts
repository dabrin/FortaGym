import { Component, Input, OnInit } from '@angular/core';
import { ModalController,AlertController } from '@ionic/angular';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.page.html',
  styleUrls: ['./lista-horarios.page.scss'],
})
export class ListaHorariosPage implements OnInit {

  @Input()arr;
  @Input()dia;

  userId=localStorage.getItem("userID")


  constructor(private modal:ModalController, private horario:HorariosService,private alerCtrl:AlertController) { }

  ngOnInit() {

  }

  async alert(id:string,hora:string) {
    console.log(this.userId)
    console.log(id)
    const alert = await this.alerCtrl.create({
     cssClass: 'my-custom-class',
     header: 'Atención',
     message: '¿Deseas hacer la cita para el <strong>'+this.dia +'</strong> a las: <strong>'+hora +'</strong>?',
     buttons: [
       {
         text: 'Cancelar',
         role: 'cancel',
         cssClass: 'danger',
         handler: (blah) => {
           console.log('Confirm Cancel: blah');
         }
       }, {
         text: 'Aceptar',
         handler: () => {
            this.horario.reservar(this.userId,id);
            this.sleep(300)
            location.reload();
       }
      }
     ]
   });

   await alert.present();
 }

  dismiss(){
    //location.reload();
    this.modal.dismiss();
    this.ngOnInit();
  }
  show(val){
    console.log(val)
    this.horario.reservar('1',val)
  }

  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms));
  }




}
