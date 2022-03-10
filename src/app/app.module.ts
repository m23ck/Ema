import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { MedewerkersComponent } from './components/medewerkers/medewerkers.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { MedewerkersbeheerComponent } from './views/medewerkersbeheer/medewerkersbeheer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    MedewerkersComponent,
    HomeComponent,
    MedewerkersbeheerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
