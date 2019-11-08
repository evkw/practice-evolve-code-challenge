import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Timesheet } from '../../models';



const ELEMENT_DATA: Timesheet[] = [
  { id: 1, state: 'Active', title: 'Task 1', type: 'Telephone Call', duration: 2.10, hourlyRate: 250.50, total: 252.70, isEditing: false, isSelected: false },
  { id: 2, state: 'Submitted', title: 'Task 2', type: 'Research and Drafting Document', duration: 3.05, hourlyRate: 120.00, total: 390.00, isEditing: false, isSelected: false },
];

const newRow: Timesheet = { id: -1, state: null, title: null, type: null, duration: 0, hourlyRate: 250.50, total: 0, isEditing: true, isSelected: false };

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-timesheet-page',
  templateUrl: './timesheet-page.component.html',
  styleUrls: ['./timesheet-page.component.css']
})
export class TimesheetPageComponent implements OnInit {

  displayedColumns: string[] = ['select', 'state', 'title', 'type', 'duration', 'hourlyRate', 'total', 'menu'];
  dataSource = ELEMENT_DATA;
  draftRow: Timesheet;
  formData: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  newRow() {
    this.draftRow = newRow;
    this.dataSource = [this.draftRow, ...this.dataSource];
  }

  save(timesheet: Timesheet) {
    this.dataSource = [{ ...this.draftRow, id: 3, state: 'Active', isEditing: false }, ...this.dataSource.filter(data => data.id !== this.draftRow.id)];
    this.draftRow = null;
  }
  

  delete(id: number) {
    this.dataSource = this.dataSource.filter(data => data.id !== id);
  }

  edit(timesheet: Timesheet) {
    this.dataSource = this.dataSource.map(data => data.id === timesheet.id ? { ...data, isEditing: true, isSelected: false } : data);
    this.formData = this.fb.group({
      title: [timesheet.title],
      type: [timesheet.type],
      duration: [timesheet.duration],
      hourlyRate: [timesheet.hourlyRate]
    })
  }

  cancel() {
    this.dataSource = this.dataSource.filter(data => !data.isEditing);
  }

  isDraft(timesheet: Timesheet) {
    return timesheet.id === -1;
  }

  isEditing(timesheet: Timesheet) {
    return timesheet.isEditing;
  }

  isActive(timesheet: Timesheet) {
    return !this.isDraft(timesheet) && !this.isEditing(timesheet) && timesheet.state === 'Active';
  }

  updateSelection(event: MatCheckboxChange, timesheet: Timesheet) {
    this.dataSource = this.dataSource.map(data => data.id === timesheet.id ? { ...data, isSelected: event.checked } : data);
  }

  submit() {
    this.dataSource = this.dataSource.map(data => data.isSelected === true ? { ...data, state: 'Submitted' } : data);
  }

}