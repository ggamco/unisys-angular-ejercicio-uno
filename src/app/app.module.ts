import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { AboutComponent } from './view/about/about.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaPrincipalComponent,
    VistaDetalleComponent,
    PrincipalComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
