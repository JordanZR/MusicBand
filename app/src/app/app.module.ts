import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumesComponent } from './albumes/albumes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    FooterComponent,
    AlbumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
