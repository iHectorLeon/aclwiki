import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import {ServicearticlesService} from './services/article.service';
import {ServicemoduloService} from './services/modulo.service';

//Rutas
import {APP_ROUTING} from './app_routes';


import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ResultfindComponent } from './components/resultfind/resultfind.component';
import { HomeComponent } from './components/home/home.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideosComponent } from './components/videos/videos.component';
import { ModulosComponent } from './components/modulos/modulos.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ResultfindComponent,
    HomeComponent,
    ArticulosComponent,
    FooterComponent,
    VideosComponent,
    ModulosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ServicearticlesService,
    ServicemoduloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
