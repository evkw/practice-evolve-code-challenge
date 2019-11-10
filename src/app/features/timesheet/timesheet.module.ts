import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';

import { TimesheetPageComponent } from './page/timesheet-page/timesheet-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetDataTableComponent } from './components/timesheet-data-table/timesheet-data-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    SharedModule,
    MatDialogModule
  ],
  declarations: [
    TimesheetPageComponent,
    TimesheetDataTableComponent
  ],
  exports: [TimesheetPageComponent],
})
export class TimesheetModule {}
