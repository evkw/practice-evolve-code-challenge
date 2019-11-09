import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Timesheet, TimesheetUpdateParams } from '../models';
import { UUID } from 'angular2-uuid';
import { TimesheetStates } from '../constants';
import { TimeHelperService } from '@shared/services/time-helper.service';

@Injectable()
export class TimesheetService {
  mockData: Timesheet[] = [
    {
      id: UUID.UUID(),
      state: TimesheetStates.Active,
      title: 'Task 1',
      type: 'Telephone Call',
      duration: 7200,
      hourlyRate: 250.5,
      isEditing: false,
      isSelected: false
    },
    {
      id: UUID.UUID(),
      state: TimesheetStates.Submitted,
      title: 'Task 2',
      type: 'Research and Drafting Document',
      duration: 10980,
      hourlyRate: 120.0,
      isEditing: false,
      isSelected: false
    }
  ];

  constructor(private _timeHelperSvc: TimeHelperService) {}

  getTimesheetEntries() {
    return of(this.mockData);
  }

  saveDraft(draft: Timesheet): Observable<boolean> {
    this.mockData = [
      {
        ...draft,
        id: UUID.UUID(),
        isEditing: false,
        state: TimesheetStates.Active
      },
      ...this.mockData
    ];
    return of(true);
  }

  updateTimesheetEntry(params: TimesheetUpdateParams): Observable<boolean> {
    const { id, hours, minutes } = params;
    const duration = this._timeHelperSvc.minutesAndHoursToSeconds(
      hours,
      minutes
    );
    const index = this.mockData.findIndex(data => data.id === id);

    console.log(params);

    if (index !== -1) {
      const newRow = { ...this.mockData[index], ...params, duration };
      this.mockData = Object.assign([...this.mockData], { [index]: newRow });
      console.log(this.mockData);
    }

    return of(true);
  }

  submitEntries(entries: Timesheet[]): Observable<boolean> {
    const ids = entries.map(data => data.id);
    this.mockData = this.mockData.map(data => {
      if (ids.includes(data.id) && data.state === TimesheetStates.Active) {
        return { ...data, state: TimesheetStates.Submitted };
      }

      return data;
    });
    return of(true);
  }
}
