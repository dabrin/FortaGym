import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ListaHorariosPage } from '../lista-horarios/lista-horarios.page';
import {HorariosService} from '../services/horarios.service';
import {Semana} from '../Model/Semana';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {





  userName=localStorage.getItem("userName");
  arrDiasHorarios=[];
  constructor(private modal:ModalController , private horario:HorariosService,private router:Router) {

    if(this.userName==null){
      this.router.navigate(['login']);
    }
    this.loadData();
  }


  diaSeleccionado(val){
    let arrDiasHorarios=this.arrDiasHorarios;
    //console.log(arrDiasHorarios);
    let arr=arrDiasHorarios.filter(item=>item.dia==val)
    let arregloDeHorario=arr[0].horarios;
    console.log(arregloDeHorario);
    this.mostrarModal(val,arregloDeHorario)
  }


  async mostrarModal(val,arregloDeHorario){
    this.refresh();
    const modal=await this.modal.create({
      component: ListaHorariosPage,
      componentProps: {
        'arr':arregloDeHorario,
        'dia':val
      }
    });
    await modal.present();

  }

  loadData(){
    this.horario.getAllHorarios().subscribe((data:any)=>{
      this.arrDiasHorarios=data;
    })
  }

  ngOnInit() {
    this.loadData();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.horario.getAllHorarios().subscribe((data: any) => {
      this.arrDiasHorarios= data;
      });
      event.target.complete();
    }, 1500);
  }
  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms));
  }
  refresh(){
    this.horario.getAllHorarios().subscribe((data: any) => {
      this.arrDiasHorarios= data;
      });

  }

}
