import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  value = '0';
  public appPages = [
    {
      title: 'Registro',
      url: '/registro-usuario',
      icon: 'home'
    },
    {
      title: 'Reinicio',
      url: '/reinicio-horarios',
      icon: 'shirt',
    },
    {
      title: 'Clientes',
      url: '/tabs/customers',
      icon: 'people'
  },



  ];

  constructor() {}
}
