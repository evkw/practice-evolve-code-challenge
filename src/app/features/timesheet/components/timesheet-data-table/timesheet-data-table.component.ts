import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Timesheet, TimesheetType } from '@features/timesheet/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TimeHelperService } from '@shared/services/time-helper.service';
import { DraftRowId, TimesheetStates, DraftRowInit } from '@features/timesheet/constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timesheet-data-table',
  templateUrl: './timesheet-data-table.component.html',
  styleUrls: ['./timesheet-data-table.component.scss']
})
export class TimesheetDataTableComponent implements OnInit {

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

  formData: FormGroup;
  draftRow: Timesheet;
  formChangeSub: Subscription;

  @Input() dataSource: Timesheet[];
  @Input() types: string[];

  @Input() set createDraft(value: any) {
    if (!!value) {
      this.addDraftRow();
    }
  }

  @Output() add = new EventEmitter<Timesheet>();
  @Output() update = new EventEmitter<Timesheet>();
  @Output() delete = new EventEmitter<Timesheet>();

  constructor(private fb: FormBuilder,
    private _timeHelperSvc: TimeHelperService) { }

  ngOnInit() {
  }

  addDraftRow() {
    if (!!this.draftRow) {
      //focus on row;
    } else {
      this.draftRow = DraftRowInit;
      this.dataSource = [this.draftRow, ...this.dataSource]
      this.initForm(this.draftRow);
    }
  }

  initForm(timesheet: Timesheet) {
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
      hourlyRate: [timesheet.hourlyRate],
    });

    this.syncTimesheetTotal() 
  }

  syncTimesheetTotal() {
    this.formChangeSub = this.formData.valueChanges.subscribe(data => {
      const { hours, minutes } = data;
      const duration = this._timeHelperSvc.minutesAndHoursToSeconds(
        hours,
        minutes
      );
      this.formData.patchValue({duration}, {emitEvent: false})
    });

  }

  edit(timesheet: Timesheet) {
    this.cancel();
    this.initForm(timesheet);
  }

  cancel() {
    if (!!this.draftRow) {
      this.dataSource = this.dataSource.filter(data => data.id !== DraftRowId);
      this.draftRow = null;
    } else {
      // revert from edit
    }
  }

  save() {
    this.add.emit(this.formData.getRawValue());
  }

  deleteTimesheet(timesheet: Timesheet) {
    this.delete.emit(timesheet);
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
