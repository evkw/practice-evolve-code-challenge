import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { AppSlice } from '@core/store/app.slice';
import { reducers } from './store/reducers';
import { TimesheetService } from './services/timesheet.service';
import { EffectsModule } from '@ngrx/effects';
import { TimesheetEffects } from './store/effects/timesheet.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(AppSlice.TimeSheet, reducers),
        EffectsModule.forFeature([TimesheetEffects])
    ],
    providers: [TimesheetService]
})
export class TimesheetStateModule { }
