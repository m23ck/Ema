import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MedewerkersbeheerComponent } from './views/medewerkersbeheer/medewerkersbeheer.component';
import { AddMedewerkerComponent } from './views/add-medewerker/add-medewerker.component';
import { EditMedewerkerComponent } from './views/edit-medewerker/edit-medewerker.component';
import { ViewMedewerkerComponent } from './views/view-medewerker/view-medewerker.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'medewerkers',
    children: [
      {path: '', component: MedewerkersbeheerComponent},
      {path: 'add-medewerker', component: AddMedewerkerComponent},
      {path: 'edit-medewerker/:id', component: EditMedewerkerComponent},
      {path: 'change-medewerker-status/:id', component: MedewerkersbeheerComponent},
      {path: 'view-medewerker/:id', component: ViewMedewerkerComponent},
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
