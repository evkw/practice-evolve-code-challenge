import * as fromTimesheet from './timesheet.reducer';
import { createFeatureSelector } from '@ngrx/store';
import { AppSlice } from '@core/store/app.slice';

export type TimesheetState = fromTimesheet.TimesheetState;

export const initialState: TimesheetState = fromTimesheet.initialState;

export const reducers = fromTimesheet.reducer;

export const selectTimesheetState = createFeatureSelector<TimesheetState>(AppSlice.TimeSheet);
