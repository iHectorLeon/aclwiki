import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ArticulosComponent} from './components/articulos/articulos.component';
import {VideosComponent} from './components/videos/videos.component';
import {ModulosComponent} from './components/modulos/modulos.component';
import {ResultfindComponent} from './components/resultfind/resultfind.component';

const APP_ROUTES:Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'articulos', component:ArticulosComponent},
  {path: 'modulo/:modulo', component:ModulosComponent},
  {path: 'result/:termino', component:ResultfindComponent},
  {path: 'videos', component:VideosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
