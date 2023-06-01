import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalles } from 'src/app/interfaces/afiliados.interface';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent {

  cod: string = '';
  detallesneg: any = '';
  constructor(public neg: NegocioService,private route: ActivatedRoute) {
    route.params.subscribe((parametros : any) => {
      neg.cargarNegocio(parametros['id']).subscribe((resp:any)=>{
        this.cod = parametros['id'];
        this.detallesneg = resp;
        console.log(this.detallesneg);
      })
    })
  }

}
