import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  admin=localStorage.getItem("admin");
  constructor() {
    console.log(window['admin'])
    //this.admin=window['admin']
  }

}
