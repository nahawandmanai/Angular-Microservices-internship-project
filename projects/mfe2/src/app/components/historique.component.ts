import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  data = [
    { date: '2023-06-08T14:30:00', capacity: 7.5 },
    { date: '2023-08-16T21:20:00', capacity:  6.89 },
    { date: '2023-08-16T21:20:00', capacity:  6.89 },
    { date: '2023-06-17T10:00:00', capacity: 10 },
    { date: '2023-06-08T14:30:00', capacity: 10 },
    { date: '2023-05-08T14:30:00', capacity: 2 },
    { date: '2023-02-17T10:00:00', capacity: 3 },
  ];
 
  datacells= [
    { nom: 'Citerne1', refuelling_date: new Date('2023-12-10T08:30:00'), Carburant_existant: 60, Quantite: 0 },
    { nom: 'Tank2', refuelling_date: new Date('2023-06-10T05:20:02'), Carburant_existant: 70, Quantite: 0 },
    { nom: 'Tank3', refuelling_date: new Date('2023-02-10T19:00:00'), Carburant_existant: 100, Quantite: 1 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
