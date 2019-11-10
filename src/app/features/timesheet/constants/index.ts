import { Timesheet } from '../models';

export const TimesheetStates = {
    Active: 'Active',
    Submitted: 'Submitted'
}

export const DraftRowId = '-1';

export const DraftRowInit: Timesheet = {
    id: DraftRowId,
    state: null,
    title: null,
    type: null,
    duration: 0,
    hourlyRate: 250.5,
    isEditing: true,
    isSelected: false
};