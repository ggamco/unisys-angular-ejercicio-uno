import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { AboutComponent } from './view/about/about.component';

const routes: Routes = [
  { path: "inicio", component: VistaPrincipalComponent },
  { path: "portada", component: VistaDetalleComponent },
  { path: "blog", component: PrincipalComponent },
  { path: "contacto", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
