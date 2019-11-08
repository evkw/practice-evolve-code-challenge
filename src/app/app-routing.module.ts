import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'timesheet',
      pathMatch: 'full'
  },
  {
    path: 'timesheet',
    loadChildren: () => import('src/app/features/timesheet/timesheet-routing.module').then(m => m.TimesheetRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
