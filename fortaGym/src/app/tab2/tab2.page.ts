import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  nombre=""
  grasa;
  peso;
  estatura="";
  cedula="";
  masa;
  constructor(private usuario:UsuarioService, private route:Router) {}

  ngOnInit(){
    let id=localStorage.getItem("userID")
    this.usuario.getUsuario(id).subscribe(data=>{
      console.log(data)
      this.nombre=data.nombre+" "+ data.apellidos;
      this.peso=data.peso;
      this.estatura=data.altura +"mts";
      this.grasa=data.grasa+ "%";
      this.cedula=data.cedula;
      this.masa=data.masaMuscular;
    })
  }

  logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("userID")
    localStorage.removeItem("admin")
    this.route.navigate(['']);
    this.route.navigate(['login'])
    console.log("Salir");
  }

}
