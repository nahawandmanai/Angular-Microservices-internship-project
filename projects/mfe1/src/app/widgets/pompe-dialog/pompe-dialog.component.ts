import { Component, OnInit, Input } from '@angular/core';
import { DataCommunicationService } from '../../service/data-communication.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pompe-dialog',
  templateUrl: './pompe-dialog.component.html',
  styleUrls: ['./pompe-dialog.component.css']
})
export class PompeDialogComponent implements OnInit {

  @Input() id: string ='';
  @Input() capacite: string='';
  @Input() nature: string='';
  @Input() site: string='';

 

  constructor(public activeModal: NgbActiveModal,private dataService: DataCommunicationService) {}

  cancel() {
    this.activeModal.dismiss('cancelled');
  }

  ok() {
    const data = {
      id: this.id,
      capacite: this.capacite,
      nature: this.nature,
      site: this.site
    };
    this.dataService.setDialogData(data); // Send the data using the service
    this.activeModal.close(data);
  }

  ngOnInit(): void {
  }

}
