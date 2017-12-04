import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicemoduloService} from '../../services/modulo.service';

@Component({
  selector: 'app-resultfind',
  templateUrl: './resultfind.component.html',
  styles: []
})
export class ResultfindComponent implements OnInit {

  resultado:any[]=[];
  termino:string;
  constructor(
    private activatedRoute:ActivatedRoute,
    private _servicemodulo:ServicemoduloService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params ['termino'];
      this.resultado = this._servicemodulo.verResultados(params['termino']);
      console.log(this.resultado);
    });
  }

}
