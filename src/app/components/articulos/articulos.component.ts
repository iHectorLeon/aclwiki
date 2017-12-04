import { Component, OnInit } from '@angular/core';
import { ServicearticlesService, Modulos} from '../../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: []
})
export class ArticulosComponent implements OnInit {
  modulo:Modulos []=[];
  constructor(private _serviceArticlesService:ServicearticlesService,
              private route:Router)
  {

  }

  ngOnInit() {
    this.modulo = this._serviceArticlesService.getArticulos();
    console.log(this.modulo);
  }

  verModulo(modulo:string){
    this.route.navigate( ['/modulo',modulo] );
  }

}
