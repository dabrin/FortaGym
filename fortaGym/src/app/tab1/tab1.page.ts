import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ListaHorariosPage } from '../lista-horarios/lista-horarios.page';
import {HorariosService} from '../services/horarios.service';
import {Semana} from '../Model/Semana';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /*arrDiasHorarios=[
    {
      'dia':"Lunes",
      'horario':
        [{
          'hora':"6:00-8:00",
          'id':'2'
        },
        {
          'hora':"8:00-9:20",
          'id':'3'
        },
        {
          'hora':"9:20-11:00",
          'id':'4'
        },
        {
          'hora':"11:00-12:30",
          'id':'5'
        },
        {
          'hora':"2:50-4:20",
          'id':'6'
        },
        {
          'hora':"4:20-5:50",
          'id':'7'
        }]

    },
    {
      'dia':"Martes",
      'horario':
        [{
          'hora':"6:00-8:00",
          'id':'2'
        },
        {
          'hora':"8:00-9:20",
          'id':'3'
        },
        {
          'hora':"9:20-11:00",
          'id':'4'
        },
        {
          'hora':"11:00-12:30",
          'id':'5'
        },
        {
          'hora':"2:50-4:20",
          'id':'6'
        },
        {
          'hora':"4:20-5:50",
          'id':'7'
        }]

    },
    {
      'dia':"Miercoles",
      'horario':
        [{
          'hora':"6:00-8:00",
          'id':'2'
        },
        {
          'hora':"8:00-9:20",
          'id':'3'
        },
        {
          'hora':"9:20-11:00",
          'id':'4'
        },
        {
          'hora':"11:00-12:30",
          'id':'5'
        },
        {
          'hora':"2:50-4:20",
          'id':'6'
        },
        {
          'hora':"4:20-5:50",
          'id':'7'
        }]

    },
    {
      'dia':"Jueves",
      'horario':
        [{
          'hora':"6:00-8:00",
          'id':'2'
        },
        {
          'hora':"8:00-9:20",
          'id':'3'
        },
        {
          'hora':"9:20-11:00",
          'id':'4'
        },
        {
          'hora':"11:00-12:30",
          'id':'5'
        },
        {
          'hora':"2:50-4:20",
          'id':'6'
        },
        {
          'hora':"4:20-5:50",
          'id':'7'
        }]

    },
    {
      'dia':"Viernes",
      'horario':
        [{
          'hora':"6:00-8:00",
          'id':'2'
        },
        {
          'hora':"8:00-9:20",
          'id':'3'
        },
        {
          'hora':"9:20-11:00",
          'id':'4'
        },
        {
          'hora':"11:00-12:30",
          'id':'5'
        },
        {
          'hora':"2:50-4:20",
          'id':'6'
        },
        {
          'hora':"4:20-5:50",
          'id':'7'
        }]

    },



  ]


*/
  arrDiasHorarios=[];
  constructor(private modal:ModalController , private horario:HorariosService) {}


  diaSeleccionado(val){
    let arrDiasHorarios=this.arrDiasHorarios;
    //console.log(arrDiasHorarios);
    let arr=arrDiasHorarios.filter(item=>item.dia==val)
    let arregloDeHorario=arr[0].horarios;
    console.log(arregloDeHorario);
    this.mostrarModal(val,arregloDeHorario)
  }


  async mostrarModal(val,arregloDeHorario){
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

}
