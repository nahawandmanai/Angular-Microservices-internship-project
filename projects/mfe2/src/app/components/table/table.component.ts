import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() datacells: any[] = [];
  
  editItem(item: any) {
    console.log('Edit clicked for item:', item);
  }

  
  copyItem(item: any) {
    console.log('Copy clicked for item:', item);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
