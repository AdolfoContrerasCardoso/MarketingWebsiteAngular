import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const Categoria = [];
    for(const recorrido of value){
      if(recorrido.categoria.toLowerCase().indexOf(args.toLowerCase())>-1){
        Categoria.push(recorrido);
      }
    }
    return Categoria;
  }

}
