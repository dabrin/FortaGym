import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  arrCitas;
  constructor(private usuario:UsuarioService) {
  }
  ngOnInit(){
    let id=localStorage.getItem("userID")
    this.usuario.getUsuario(id).subscribe(data=>{
      console.log(data)
      this.arrCitas=data.citas
    })

  }

  doRefresh(event){

  }
}
