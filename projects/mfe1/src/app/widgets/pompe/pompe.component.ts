import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pompe',
  templateUrl: './pompe.component.html',
  styleUrls: ['./pompe.component.css']
})
export class PompeComponent implements OnInit {

   @Input() tanks: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
