import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/Usuario';
import { UsuarioService } from '../services/usuario.service';
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
  constructor(private user:UsuarioService) { }

  crearUsuario(){
    console.log("DDDDDDDD")
    this.usuario.nombre=this.nombre;
    this.usuario.apellidos=this.apellidos;
    this.usuario.cedula=this.cedula;
    this.usuario.contrasenna=this.contrasenna;
    this.usuario.altura=this.altura;
    this.usuario.peso=this.peso;
    this.usuario.grasa=this.grasa;
    this.usuario.masaMuscular=this.masaMuscular;
    this.user.postUsuario(this.usuario).subscribe((data)=>{
    console.log("Cool")
  })

  }

  dd(){
    console.log("FFF")
  }
  ngOnInit() {
  }

}
