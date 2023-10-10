import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  private dialogData = new Subject<any>();

  getDialogData() {
    return this.dialogData.asObservable();
  }

  setDialogData(data: any) {
    this.dialogData.next(data);
  }


  constructor() { }
}
