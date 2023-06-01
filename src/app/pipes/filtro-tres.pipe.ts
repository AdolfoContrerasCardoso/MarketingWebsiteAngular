import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTres'
})
export class FiltroTresPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.sort((a,b) => {
      if(a.categorias < b.categorias){
        return -1;
      }
      if(a.categorias > b.categorias){
        return 1;
      }
      return 0;
    });
  }

}
