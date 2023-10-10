import { Component, OnInit } from '@angular/core';
//import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { } 

  selectedDate: string = '';

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    
  }

  ngOnInit(): void {
  }

}
