import { Component, OnInit, Input } from '@angular/core';
import { DataCommunicationService } from '../../service/data-communication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-citerne',
  templateUrl: './citerne.component.html',
  styleUrls: ['./citerne.component.css']
})

export class CiterneComponent implements OnInit {
  receivedData: any = {};

  @Input() tanks: any[] = [];

  constructor(private modalService: NgbModal,private dataService: DataCommunicationService) { }

  ngOnInit() {
    this.dataService.getDialogData().subscribe(data => {
    this.receivedData = data;
      console.log('Received data from dialog:', data);
    });
  }

  openDialog() {
    const modalRef = this.modalService.open(DialogComponent);

    modalRef.result.then((result) => {
      
      console.log('Dialog result:', result);
    }).catch((error) => {
      console.log('Dialog dismissed');
    });
  }


}
