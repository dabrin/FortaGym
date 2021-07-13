import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.page.html',
  styleUrls: ['./restart.page.scss'],
})
export class RestartPage implements OnInit {

  constructor(private route:Router,private login:LoginService) { }

  ngOnInit() {
  }


  logout(){
    localStorage.removeItem("userName")
    localStorage.removeItem("userID")
    localStorage.removeItem("admin")
    this.route.navigate(['']);
    this.route.navigate(['login'])
    console.log("Salir");
  }


  restart(){
    this.login.restart().subscribe((data)=>{
      console.log("success")
    })
  }
}
