import { NgModule } from '@angular/core';
import { TimesheetPageComponent } from './page/timesheet-page/timesheet-page.component';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetModule } from './timesheet.module';


const routes: Routes = [
  {
    path: '',
    component: TimesheetPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TimesheetModule,
  ],
  exports: [RouterModule],
})
export class TimesheetRoutingModule {}
