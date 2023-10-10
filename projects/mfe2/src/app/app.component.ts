import { Component,NgModule,enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  title = 'mfe2';
  show = false;

  constructor(private router: Router) {

  }

}
