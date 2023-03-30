import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {AlbumesComponent} from "./albumes/albumes.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'albumes', component: AlbumesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
