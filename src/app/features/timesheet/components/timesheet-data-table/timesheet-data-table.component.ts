import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Timesheet } from '@features/timesheet/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimeHelperService } from '@shared/services/time-helper.service';
import { DraftRowId, TimesheetStates, DraftRowInit } from '@features/timesheet/constants';
import { Subscription, BehaviorSubject } from 'rxjs';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-timesheet-data-table',
  templateUrl: './timesheet-data-table.component.html',
  styleUrls: ['./timesheet-data-table.component.scss']
})
export class TimesheetDataTableComponent {

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

  focus$: BehaviorSubject<boolean> = new BehaviorSubject(true);
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
  @Output() selectedEntries = new EventEmitter<Timesheet[]>();

  constructor(private fb: FormBuilder,
    private _timeHelperSvc: TimeHelperService) { }

  addDraftRow() {
    if (!!this.draftRow) {
      this.focus$.next(true);
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
      title: [timesheet.title, Validators.required],
      type: [timesheet.type, Validators.required],
      hours: [hours, [Validators.min(0)]],
      minutes: [minutes, [Validators.min(0), Validators.max(59)]],
      duration: [timesheet.duration],
      hourlyRate: [timesheet.hourlyRate, [Validators.required, Validators.min(0)]],
    });

  }

  edit(timesheet: Timesheet) {
    this.cancel();
    this.initForm(timesheet);
    this.dataSource = this.dataSource.map(data => data.id === timesheet.id ? Object.assign({}, data, { isEditing: true }) : data);
  }

  toggleSelected(timesheet: Timesheet) {
    this.dataSource = this.dataSource.map(data => data.id === timesheet.id ? Object.assign({}, data, { isSelected: !data.isSelected }) : data);
    this.selectedEntries.emit(this.dataSource.filter(data => data.isSelected === true));
  }

  cancel() {
    if (!!this.draftRow) {
      this.dataSource = this.dataSource.filter(data => data.id !== DraftRowId);
      this.draftRow = null;
    } else {
      this.dataSource = this.dataSource.map(data => Object.assign({}, data, { isEditing: false }));
    }
  }

  save() {
    if (this.formData.invalid === false) {
      const value = this.formDataToTimesheet();
      !!this.draftRow ? this.add.emit(value) : this.update.emit(value);
      this.draftRow = null;
    }
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

  formDataToTimesheet(): Timesheet {
    const { id, hours, minutes, title, type, hourlyRate } = this.formData.getRawValue();
    return <Timesheet>{
      title,
      type,
      hourlyRate,
      id: !!this.draftRow ? UUID.UUID() : id,
      state: TimesheetStates.Active,
      duration: this._timeHelperSvc.minutesAndHoursToSeconds(hours, minutes),
      isEditing: false,
      isSelected: false
    }
  }

}
