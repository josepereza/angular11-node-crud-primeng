import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltasComponent } from './altas/altas.component';
import { ListadoComponent } from './listado/listado.component';
import { PaginacionComponent } from './paginacion/paginacion.component';

const routes: Routes = [
  {path:'altas', component: AltasComponent},
  {path:'listado', component: ListadoComponent},
  {path:'paginacion', component: PaginacionComponent},
  {path: ''  , component: AltasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
