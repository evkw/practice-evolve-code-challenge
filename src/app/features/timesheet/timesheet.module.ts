import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatButtonModule, MatInputModule, MatCheckboxModule, MatSelectModule } from '@angular/material';

import { TimesheetPageComponent } from './page/timesheet-page/timesheet-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
  declarations: [TimesheetPageComponent],
  exports: [TimesheetPageComponent]
})
export class TimesheetModule { }
