import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCuatro'
})
export class FiltroCuatroPipe implements PipeTransform {

  transform(value: any[],): any {
    return value.sort((a,b) => {
      if(a.zonas < b.zonas){
        return -1;
      }
      if(a.zonas > b.zonas){
        return 1;
      }
      return 0;
    });
  }

}
