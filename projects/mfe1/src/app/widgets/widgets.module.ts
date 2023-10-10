import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiterneComponent } from './citerne/citerne.component';
import { RouterModule } from '@angular/router';
import { CITERNES_ROUTES } from './widgets.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CITERNES_ROUTES),
    
  ],

  declarations: [

  ]
})
export class WidgetsModule { }