import { createSelector } from '@ngrx/store';
import { selectTimesheetState } from '../reducers';
import * as fromTimesheet from '../reducers/timesheet.reducer';
import { Timesheet } from '@features/timesheet/models';

export const selectTimesheetLoaded = createSelector(
    selectTimesheetState,
    (state: fromTimesheet.TimesheetState) => fromTimesheet.selectLoaded(state)
);

export const selectTimesheetEntries = createSelector(
    selectTimesheetState,
    (state: fromTimesheet.TimesheetState) => fromTimesheet.selectTimesheetEntries(state)
);

export const selectTimesheetDraft = createSelector(
    selectTimesheetState,
    (state: fromTimesheet.TimesheetState) => fromTimesheet.selectTimesheetDraft(state)
)


export const selectSelectedTimesheetEntries = createSelector(
    selectTimesheetState,
    (state: fromTimesheet.TimesheetState) => fromTimesheet.selectSelectedTimesheetEntries(state)
)

