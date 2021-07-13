import {  AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router}from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private login:LoginService,private router:Router,private alert:AlertController) { }

  ngOnInit() {
  }


  loginFunct(cedula:string,contraseña:string){
    this.login.login(cedula,contraseña).subscribe((data:any)=>{
      console.log(data)
       localStorage.setItem('userName',data.nombre);
       localStorage.setItem('userID',data.usuarioId);
       if(data.nombre=="Maikel"){
         localStorage.setItem('admin',"1");
         //window['admin']='1';
         //location.reload()
       }
       this.router.navigate([''])
       //location.reload();

       },(err)=>{

        console.log(err,"MENSAJE")
        this.showMessage();

      })
  }

  async showMessage() {
    const alert = await this.alert.create({
     cssClass: 'my-custom-class',
     header: 'Atención',
     message: '<strong>Cédula</strong> o <strong>contraseña</strong> incorrectos',
     buttons: [
       {
         text: 'Aceptar',
         role: 'cancel',
         cssClass: 'danger',
         handler: (blah) => {
           console.log('Confirm Cancel: blah');
         }
       }
     ]
   });

   await alert.present();
 }

 registrar(){
   this.router.navigate(['registro-usuarios'])
 }

}
