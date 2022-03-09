import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MedewerkersbeheerComponent } from './views/medewerkersbeheer/medewerkersbeheer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'medewerkersbeheer', component: MedewerkersbeheerComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
