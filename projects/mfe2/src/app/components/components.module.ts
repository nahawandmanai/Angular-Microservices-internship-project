import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent} from './chart/chart.component';
import { RouterModule } from '@angular/router';
import { CHARTS_ROUTES } from './components.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CHARTS_ROUTES),

  ],

  declarations: [ ]
})
export class ComponentsModule { }