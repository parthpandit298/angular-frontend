import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeDetailsDialogComponent } from './employee-details-dialog/employee-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';
import { GanttComponent } from './gantt/gantt.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsDialogComponent,
    DeleteConfirmationDialogComponent,
    GanttComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatTableModule,          // Table Module
    MatButtonModule,         // Buttons
    MatCardModule,           // For styling containers/cards
    GanttModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
