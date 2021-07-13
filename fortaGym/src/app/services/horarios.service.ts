import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor( private http:HttpClient) { }


  getAllHorarios():Observable<any>{
    const path='https://fortagym.herokuapp.com/api/dia/getWeek';
    return this.http.get(path);
  }

  getHorario():Observable<any>{
    const path='';
    return this.http.get(path);
  }

  cancelar(id:string):Observable<any>{
    const path=`https://fortagym.herokuapp.com/api/cita/cancelar/${id}`
    return this.http.delete(path)
  }



  reservar(val1:string,val2:string){
    const path='https://fortagym.herokuapp.com/api/cita/insert'

    let usuario={'usuario':{'usuarioid':val1}}
    let horario={'horario':{'id':val1}}

    let jsonData= {
      "usuario":
      {
        "usuarioId":val1
      }
      ,
      "horario":{
        "id":val2
      }
    }
    const headers = {
      'Content-Type': 'application/json; charset=utf8',
      'Accept': 'application/json' }
    const params = new HttpParams()
      .set('usuarioid', val1)
      .set('id', "" + val2);
    const body = JSON.stringify(jsonData);
    const formData=JSON.stringify(jsonData);
    return this.http.post<any>(path,formData,{'headers':headers,'params':params}).toPromise().
    then((data:any)=>{console.log(JSON.stringify(data))})
  }
}
