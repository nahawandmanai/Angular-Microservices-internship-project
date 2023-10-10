import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: 'historique-citerne', component: CalendarComponent },
  //{ path: 'historique-pompe', component: Page2Component },
  { path: '', redirectTo: '/historique-citerne', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
