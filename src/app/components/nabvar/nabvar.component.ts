import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html'
})
export class NabvarComponent implements OnInit {

  constructor(private router:Router) {
  }
  ngOnInit() {
  }

  buscarTermino(termino:string){
    this.router.navigate(['/result',termino]);
  }

}
