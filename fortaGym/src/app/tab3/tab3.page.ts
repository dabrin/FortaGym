import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  arrCitas;
  constructor( private usuario:UsuarioService,private route:Router,private alerCtrl:AlertController,private horario:HorariosService) {
  }
  ngOnInit(){
    let id=localStorage.getItem("userID")
    this.usuario.getCitas(id).subscribe(data=>{
      console.log(data)
      this.arrCitas=data
    })

  }

  doRefresh(event){
    let id=localStorage.getItem("userID")
    setTimeout(() => {
      this.usuario.getCitas(id).subscribe((data: any) => {
      this.arrCitas= data;
      });
      event.target.complete();
    }, 1500);
  }
  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms));
  }

  logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("userID")
    localStorage.removeItem("admin")
    this.route.navigate(['']);
    this.route.navigate(['login'])
    console.log("Salir");
  }

  cancelar(id:string,hora:string,dia:string){
    console.log(id);
    this.alert(id,hora,dia);
  }




  async alert(id:string,hora:string,dia:string) {
    console.log(id)
    const alert = await this.alerCtrl.create({
     cssClass: 'my-custom-class',
     header: 'Atención',
     message: '¿Deseas cancelar la cita para el <strong>'+dia +'</strong> a las: <strong>'+hora +'</strong>?',
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
            this.horario.cancelar(id).subscribe((data)=>{
              console.log("success")
              this.doRefresh(EventTarget);
            });
            this.sleep(300);

            //location.reload();
       }
      }
     ]
   });

   await alert.present();
 }
}
