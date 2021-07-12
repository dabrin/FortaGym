import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {
  }

  getUsuario(id:string):Observable<any>{
//https://fortagym.herokuapp.com/api/dia/getWeek
    return this.http.get(`https://fortagym.herokuapp.com/api/usuario/get/${1}`)

  }
}
