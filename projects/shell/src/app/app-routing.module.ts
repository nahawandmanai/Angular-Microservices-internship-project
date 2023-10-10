import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//mport { mainModule } from 'process';
import { MainNavComponent } from './main-nav/main-nav.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const APP_ROUTES: Routes = [
 /*  { path: '', 
  component: HomeComponent,
  pathMatch:'full'
 }, */

 // { path: 'about', component: AboutComponent },

  {
  path: '',
  component: MainNavComponent,
  pathMatch: 'full'
}, 

 {
  path: 'citernes',
  loadChildren:() => import('mfe1/citernes.module').then( (m) => m.CITERNESModule),
} 

];

 @NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
}) 

export class AppRoutingModule { }
