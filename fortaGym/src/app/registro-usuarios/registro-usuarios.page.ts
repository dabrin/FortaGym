import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { AlertController } from '@ionic/angular';
import {Router}from '@angular/router'
@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.page.html',
  styleUrls: ['./registro-usuarios.page.scss'],
})
export class RegistroUsuariosPage implements OnInit {

  nombre:string;
  apellidos:string;
  cedula:string;
  contrasenna:string;
  altura:string;
  peso:string;
  grasa:string;
  masaMuscular:string;
  usuario=new Usuario();
  constructor(private alert:AlertController, private user:UsuarioService, private router:Router) { }

  crearUsuario(){
    this.usuario.nombre=this.nombre;
    this.usuario.apellidos=this.apellidos;
    this.usuario.cedula=this.cedula;
    this.usuario.contrasenna=this.contrasenna;
    this.usuario.altura=this.altura;
    this.usuario.peso=this.peso;
    this.usuario.grasa=this.grasa;
    this.usuario.masaMuscular=this.masaMuscular;
    this.user.postUsuario(this.usuario).subscribe((data)=>{

      this.showAlertCool();
  },(err)=>{
    this.showAlertBad();
  })

  }
  async showAlertCool(){

    const alert = await this.alert.create({
     cssClass: 'my-custom-class',
     header: 'Atención',
     message: 'Se ingresó correctamente!',
     buttons: [
       {
         text: 'Confirmar',
         role: 'cancel',
         cssClass: 'danger',
         handler: (blah) => {
           this.router.navigate([''])
            this.clean();
         }
       }
     ]
   });

   await alert.present();

  }

  async showAlertBad(){
    //console.log(this.userId)
    const alert = await this.alert.create({
     cssClass: 'my-custom-class',
     header: 'Atención',
     message: 'Ocurrió un error',
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

  clean(){
    this.nombre="";
    this.apellidos="";
    this.cedula="";
    this.contrasenna="";
    this.altura="";
    this.peso="";
    this.grasa="";
    this.masaMuscular="";
  }

  ngOnInit() {
  }

}
