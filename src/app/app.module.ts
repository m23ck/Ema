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
import { AddMedewerkerComponent } from './views/add-medewerker/add-medewerker.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import {TableModule} from 'primeng/table';
import { EditMedewerkerComponent } from './views/edit-medewerker/edit-medewerker.component';
import { ViewMedewerkerComponent } from './views/view-medewerker/view-medewerker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeMedewerkerStatusComponent } from './components/change-medewerker-status/change-medewerker-status.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    MedewerkersComponent,
    HomeComponent,
    MedewerkersbeheerComponent,
    AddMedewerkerComponent,
    FormComponent,
    InputComponent,
    EditMedewerkerComponent,
    ViewMedewerkerComponent,
    ChangeMedewerkerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
