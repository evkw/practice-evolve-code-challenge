import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Timesheet, TimesheetType } from '../../models';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

@Component({
  selector: 'app-timesheet-page',
  templateUrl: './timesheet-page.component.html',
  styleUrls: ['./timesheet-page.component.scss']
})
export class TimesheetPageComponent implements OnInit {

  dataSource$: Observable<Timesheet[]>;
  types$: Observable<string[]>;

  timesheetService: EntityCollectionService<Timesheet>;
  typeService: EntityCollectionService<TimesheetType>;
  draft: any;

  constructor(
    entityServices: EntityServices,

  ) {
    this.timesheetService = entityServices.getEntityCollectionService('Timesheet');
    this.typeService = entityServices.getEntityCollectionService('Type');
    this.dataSource$ = this.timesheetService.entities$;
    this.types$ = this.typeService.entities$.pipe(map(data => data.map(item => item.name)));;
  }

  ngOnInit() {
    this.timesheetService.getAll();
    this.typeService.getAll()
  }

  onAdd(event: Timesheet) {
    this.timesheetService.add(event);
  }

  onUpdate(timesheet: Timesheet) {
    this.timesheetService.update(timesheet);
  }

  onDelete(timesheet: Timesheet) {
    this.timesheetService.delete(timesheet);
  }

  submit() {
  }

  createDraft(event) {
    this.draft = event;
  }


}
