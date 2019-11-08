import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Timesheet } from '../models';
import { UUID } from 'angular2-uuid';
import { TimesheetStates } from '../constants';

@Injectable()
export class TimesheetService {

    mockData: Timesheet[] = [
        { id: UUID.UUID(), state: TimesheetStates.Active, title: 'Task 1', type: 'Telephone Call', duration: 7200, hourlyRate: 250.50, total: 252.70, isEditing: false, isSelected: false },
        { id: UUID.UUID(), state: TimesheetStates.Submitted, title: 'Task 2', type: 'Research and Drafting Document', duration: 10980, hourlyRate: 120.00, total: 390.00, isEditing: false, isSelected: false },
    ];

    getTimesheetEntries() {
        return of(this.mockData);
    }

    saveDraft(draft: Timesheet): Observable<boolean> {
        this.mockData = [{...draft, id: UUID.UUID()}, ...this.mockData];
        return of(true);
    }

    submitEntries(entries: Timesheet[]): Observable<boolean> {
        const ids = entries.map(data => data.id);
        this.mockData = this.mockData.map(data => {
            if(ids.includes(data.id) && data.state === TimesheetStates.Active) {
                return {...data, state: TimesheetStates.Submitted}
            }

            return data;
        })
        return of(true);
    }
}