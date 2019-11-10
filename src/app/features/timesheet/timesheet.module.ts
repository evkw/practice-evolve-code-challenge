import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';

import { TimesheetPageComponent } from './page/timesheet-page/timesheet-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetTotalPipe } from './pipes/timesheet-total.pipe';
import { TimesheetDurationPipe } from './pipes/timesheet-duration.pipe';
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
    SharedModule
  ],
  declarations: [
    TimesheetPageComponent,
    TimesheetTotalPipe,
    TimesheetDurationPipe,
    TimesheetDataTableComponent
  ],
  exports: [TimesheetPageComponent],
  providers: [TimesheetTotalPipe]
})
export class TimesheetModule {}
