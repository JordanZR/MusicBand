import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { MerchComponent } from './merch/merch.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { ContactoComponent } from './contacto/contacto.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    FooterComponent,
    AlbumesComponent,
    MerchComponent,
    GaleriaComponent,
    MiembrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
