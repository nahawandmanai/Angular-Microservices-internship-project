import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EventEmitter, Output } from '@angular/core';
import { Data } from '@angular/router';
import { DataCommunicationService } from '../../service/data-communication.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../service/dialog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {

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
  

  }
