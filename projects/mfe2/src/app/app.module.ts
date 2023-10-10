import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './components/calendar/calendar.component'; 
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { DxChartModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { HistoriqueComponent } from './components/historique.component';
import { DxDataGridModule } from 'devextreme-angular';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
//import { MatTimepickerModule } from 'angular-material-timepicker';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ChartComponent,
    TableComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    DxChartModule,
    DxButtonModule,
    DxDataGridModule,
    GridModule, 
    PagerModule,
    MatIconModule,
    //MatMomentDateModule,

  ],
  providers: [TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
