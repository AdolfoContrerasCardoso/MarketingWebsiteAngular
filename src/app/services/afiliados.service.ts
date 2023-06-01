import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Afiliados, Detalles } from '../interfaces/afiliados.interface';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  afiliados: Afiliados[] = [];
  zonas: Detalles[] = [];
  categorias: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarAfiliados();
    this.cargarZonas();
    this.cargarCategorias();
   }

  cargarAfiliados(){
    this.http.get('https://negocios-258dd-default-rtdb.firebaseio.com/afiliados.json')
    .subscribe( (resp: any) => {
      this.afiliados = resp;
      console.log(this.afiliados);
    })
    console.log('Cargando afiliados service');
  }
  cargarZonas(){
    this.http.get('https://negocios-258dd-default-rtdb.firebaseio.com/zonas.json')
    .subscribe( (resp: any) => {
      this.zonas=resp;
      console.log(this.zonas);
    })
  }
  cargarCategorias(){
    this.http.get('https://negocios-258dd-default-rtdb.firebaseio.com/categorias.json')
    .subscribe( (resp: any) => {
      this.categorias=resp;
      console.log(this.categorias);
    })
  }
}
