import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    const buscarLugar = [];
    for(const recorrido of value){
      if(recorrido.lugar.toLowerCase().indexOf(arg.toLowerCase())>-1){
        buscarLugar.push(recorrido);
      }
    }
    return buscarLugar;
  }
}
