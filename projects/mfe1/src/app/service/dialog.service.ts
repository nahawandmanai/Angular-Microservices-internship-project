import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../widgets/dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  
  openDialog() {
    
    this.dialog.open(DialogComponent, {
      width: '400px', 
     
    });
  }

  closeDialog() {
    console.log('Dialog closing.');
    this.dialog.closeAll();
  }
}
