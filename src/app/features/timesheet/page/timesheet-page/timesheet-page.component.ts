import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';

import { Timesheet } from '../../models';
import { TimesheetState } from '../../store/reducers/timesheet.reducer';
import { selectTimesheetEntries } from '../../store/selectors/timesheet.selector';
import * as actions from '../../store/actions';
import { DraftRowId, TimesheetStates } from '@features/timesheet/constants';
import { TimeHelperService } from '@shared/services/time-helper.service';

@Component({
  selector: 'app-timesheet-page',
  templateUrl: './timesheet-page.component.html',
  styleUrls: ['./timesheet-page.component.scss']
})
export class TimesheetPageComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'state',
    'title',
    'type',
    'duration',
    'hourlyRate',
    'total',
    'menu'
  ];
  dataSource$: Observable<Timesheet[]>;
  formData: FormGroup;
  editingData: Timesheet;

  formChangeSub: Subscription;

  testList = ['test', 'test2', 'test3'];

  constructor(
    private fb: FormBuilder,
    private _store: Store<TimesheetState>,
    private _timeHelperSvc: TimeHelperService
  ) {}

  ngOnInit() {
    this.dataSource$ = this._store.pipe(select(selectTimesheetEntries));
  }

  newRow() {
    this._store.dispatch(new actions.CreateTimesheetDraft());
  }

  save(timesheet: Timesheet) {
    this.isDraft(timesheet)
      ? this._store.dispatch(new actions.SaveTimesheetDraftStart())
      : this._store.dispatch(
          new actions.UpdateTimesheetStart(this.formData.getRawValue())
        );
  }

  delete(id: string) {
    this._store.dispatch(new actions.DeleteTimesheetStart(id));
  }

  edit(timesheet: Timesheet) {
    this._store.dispatch(
      new actions.SetTimesheetRowEditing({ id: timesheet.id, isEditing: true })
    );
    const { hours, minutes } = this._timeHelperSvc.secondsToHoursAndMinutes(
      timesheet.duration
    );
    this.formData = this.fb.group({
      id: [timesheet.id],
      title: [timesheet.title],
      type: [timesheet.type],
      hours: [hours],
      minutes: [minutes],
      duration: [timesheet.duration],
      hourlyRate: [timesheet.hourlyRate]
    });
    this.watchFormChanges();
  }

  watchFormChanges() {
    this.formChangeSub = this.formData.valueChanges.subscribe(data => {
      const { hours, minutes } = data;
      const newDuration = this._timeHelperSvc.minutesAndHoursToSeconds(
        hours,
        minutes
      );
      this.editingData = { ...data, duration: newDuration };
    });
  }

  cancel(timesheet: Timesheet) {
    this.isDraft(timesheet)
      ? this._store.dispatch(new actions.CancelTimesheetDraft())
      : this._store.dispatch(
          new actions.SetTimesheetRowEditing({
            id: timesheet.id,
            isEditing: false
          })
        );
  }

  updateSelection(event: MatCheckboxChange, timesheet: Timesheet) {
    this._store.dispatch(
      new actions.UpdateTimesheetSelection({
        id: timesheet.id,
        isSelected: event.checked
      })
    );
  }

  submit() {
    this._store.dispatch(new actions.SubmitTimesheetEntriesStart());
  }

  isDraft(timesheet: Timesheet) {
    return timesheet.id === DraftRowId;
  }

  isEditing(timesheet: Timesheet) {
    return timesheet.isEditing;
  }

  isActive(timesheet: Timesheet) {
    return (
      !this.isDraft(timesheet) &&
      !this.isEditing(timesheet) &&
      timesheet.state === TimesheetStates.Active
    );
  }
}
