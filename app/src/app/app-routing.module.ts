import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AlbumesComponent} from "./albumes/albumes.component";
import {MerchComponent} from "./merch/merch.component";
import {GaleriaComponent} from "./galeria/galeria.component";
import {MiembrosComponent} from "./miembros/miembros.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'albumes', component: AlbumesComponent},
  {path: 'merch', component: MerchComponent},
  {path:'galeria', component: GaleriaComponent},
  {path: 'miembros', component: MiembrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
