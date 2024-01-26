import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {MultiplicationComponent } from './multiplication/multiplication.component'; 
const routes: Routes = [


  {path: 'deux', component: MultiplicationComponent }, 
  {path: 'trois', component: MultiplicationComponent,  }, 
  {path: 'quatre', component: MultiplicationComponent }, 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
