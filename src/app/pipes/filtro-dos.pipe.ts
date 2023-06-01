import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDos'
})
export class FiltroDosPipe implements PipeTransform {

  transform(value: any[]): any {
    return value.sort((a,b)=>{
      if(a===a){
        return -1;
      }else
      return 1;
    });
  }

}
