import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Usuario } from '../Model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {
  }

  getUsuario(id:string):Observable<any>{
    return this.http.get(`https://fortagym.herokuapp.com/api/usuario/get/${id}`)
  }

  getCitas(id:string):Observable<any>{
    const path=`https://fortagym.herokuapp.com/api/cita/citasUsuario/${id}`
    return this.http.get(path)
  }
  postUsuario(user:Usuario):Observable<any>{
    const path='https://fortagym.herokuapp.com/api/usuario/insert'

    let jsonData=user;
    const headers = {
    'Content-Type': 'application/json; charset=utf8',
    'Accept': 'application/json' }
    const params = new HttpParams()
    .set('nombre',user.nombre)
    .set('apellidos',user.apellidos)
    .set('cedula', user.cedula)
    .set('contrasenna', user.contrasenna)
    .set('altura',user.altura)
    .set('peso',user.peso)
    .set('grasa',user.grasa)
    .set('masaMuscular',user.masaMuscular);
    const body = JSON.stringify(jsonData);
    const formData=JSON.stringify(jsonData);
    return this.http.post(path,formData,{'headers':headers})

  }
}
