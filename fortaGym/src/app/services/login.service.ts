import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


login(cedula:string,contraseña:string):Observable<any>{

  const path='https://fortagym.herokuapp.com/api/usuario/login'

  let jsonData= {
  "cedula":cedula,
  "contrasenna":contraseña
  }
  const headers = {
    'Content-Type': 'application/json; charset=utf8',
    'Accept': 'application/json' }
  const params = new HttpParams()
    .set('cedula', cedula)
    .set('contrasenna', contraseña);
  const body = JSON.stringify(jsonData);
  const formData=JSON.stringify(jsonData);
  return this.http.post(path,formData,{'headers':headers,'params':params})
}
}
