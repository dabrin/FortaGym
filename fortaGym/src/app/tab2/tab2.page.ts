import { Component } from '@angular/core';
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
  constructor(private usuario:UsuarioService) {}

  ngOnInit(){

    this.usuario.getUsuario("1").subscribe(data=>{
      console.log(data)
      this.nombre=data.nombre+" "+ data.apellidos;
      this.peso=data.peso;
      this.estatura=data.altura +"mts";
      this.grasa=data.grasa+ "%";
    })
  }

}
