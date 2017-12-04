import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicemoduloService} from '../../services/modulo.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html'
})
export class ModulosComponent{
  articulo:any = {};
  constructor( private activatedRoute:ActivatedRoute,
               private servicemodulo:ServicemoduloService
  ) {
    this.activatedRoute.params.subscribe( params =>{
      console.log( params );
      this.articulo = this.servicemodulo.verModulo(params['modulo']);
      console.log(this.articulo);
    })
  }
}
