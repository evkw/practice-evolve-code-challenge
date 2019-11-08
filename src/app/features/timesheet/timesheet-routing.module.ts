import { NgModule } from '@angular/core';
import { TimesheetPageComponent } from './page/timesheet-page/timesheet-page.component';
import { Routes, RouterModule } from '@angular/router';
import { TimesheetActivateGuard } from './guards/timesheet-activate.guard';
import { TimesheetModule } from './timesheet.module';
import { TimesheetStateModule } from './timesheet-state.module';


const routes: Routes = [
  {
    path: '',
    component: TimesheetPageComponent,
    canActivate: [TimesheetActivateGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TimesheetModule,
    TimesheetStateModule
  ],
  exports: [RouterModule],
  providers: [TimesheetActivateGuard]
})
export class TimesheetRoutingModule {}
