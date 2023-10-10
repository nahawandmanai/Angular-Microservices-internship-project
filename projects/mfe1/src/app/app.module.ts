import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon';
import { IconsComponent } from './widgets/icons/icons.component';
import { CiterneComponent } from './widgets/citerne/citerne.component';
import { FilterComponent } from './widgets/filter/filter.component';
import { MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatLabel } from '@angular/material/form-field'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './widgets/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogConfig} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { DashboardComponent } from './widgets/dashboard.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { PompeComponent } from './widgets/pompe/pompe.component';
import { PompeiconsComponent } from './widgets/pompeicons/pompeicons.component';
import { PompeFilterComponent } from './widgets/pompe-filter/pompe-filter.component';
import { PompeDialogComponent } from './widgets/pompe-dialog/pompe-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    CiterneComponent,
    FilterComponent,
    DialogComponent, 
    DashboardComponent,
    PompeComponent,
    PompeiconsComponent,
    PompeFilterComponent,
    PompeDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule ,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    NgbModule,
    MatChipsModule,
    MatMenuModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
