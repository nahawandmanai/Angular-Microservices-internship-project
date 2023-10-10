import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiterneComponent } from './widgets/citerne/citerne.component';

const APP_ROUTES: Routes = [
  { path: '', component: CiterneComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
}) 


export class AppRoutingModule { }
