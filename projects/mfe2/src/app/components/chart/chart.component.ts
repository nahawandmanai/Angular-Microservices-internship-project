import { Component, OnInit , Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoriqueComponent } from '../historique.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  receivedData: any = {};
  @Input() data: any[] = [];
  
  
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }
}
