import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule } from '@angular/material';

import { TimesheetPageComponent } from './page/timesheet-page/timesheet-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetTotalPipe } from './pipes/timesheet-total.pipe';
import { TimesheetDurationPipe } from './pipes/timesheet-duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    SharedModule],
  declarations: [TimesheetPageComponent, TimesheetTotalPipe, TimesheetDurationPipe],
  exports: [TimesheetPageComponent],
  providers: []
})
export class TimesheetModule { }
