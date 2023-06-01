import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(public http: HttpClient) {
   }
  public cargarNegocio(cod:String){
    return this.http.get(`https://negocios-258dd-default-rtdb.firebaseio.com/negocio/${cod}.json`)
  }
}
