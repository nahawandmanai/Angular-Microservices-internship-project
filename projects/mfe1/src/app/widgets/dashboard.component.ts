import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  tanks =[{
    id: 1,
    nature: 'Gasoil 50',
    capacity: '7,5m²',
    date : new Date('2023-06-08T14:30:00'),
    site: 1
  },
  {
    id: 2,
    nature: 'Super sans-plomb',
    capacity: '6,89m',
    date : new Date('2023-08-16T21:20:00'),
    site: 22
  },
  {
    id: 3,
    nature: 'Gasoil ordinaire',
    capacity: '100m',
    date : new Date('2023-08-17T10:00:00'),
    site: 3
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
