import { Routes } from '@angular/router';
import { CiterneComponent } from './citerne/citerne.component';
import { PompeComponent } from './pompe/pompe.component';

export const CITERNES_ROUTES: Routes = [
    {
      path: 'Citernes',
      component: CiterneComponent
    },
    {
      path:'Pompes',
      component:PompeComponent
    }
];