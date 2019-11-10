import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Timesheet, TimesheetType } from '../../models';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { TimesheetStates } from '@features/timesheet/constants';
import { MatDialog } from '@angular/material';
import { DialogData } from '@shared/models/dialog.model';
import { BasicDialogComponent } from '@shared/components';

@Component({
  selector: 'app-timesheet-page',
  templateUrl: './timesheet-page.component.html',
  styleUrls: ['./timesheet-page.component.scss']
})
export class TimesheetPageComponent implements OnInit, OnDestroy {
  dataSource$: Observable<Timesheet[]>;
  types$: Observable<string[]>;

  dialogCloseSub: Subscription;

  timesheetService: EntityCollectionService<Timesheet>;
  typeService: EntityCollectionService<TimesheetType>;
  selectedEntries: Timesheet[]
  draft: any;

  constructor(
    entityServices: EntityServices,
    public dialog: MatDialog
  ) {
    this.timesheetService = entityServices.getEntityCollectionService('Timesheet');
    this.typeService = entityServices.getEntityCollectionService('Type');
    this.dataSource$ = this.timesheetService.entities$;
    this.types$ = this.typeService.entities$.pipe(map(data => data.map(item => item.name)));
  }

  ngOnInit() {
    this.timesheetService.getAll();
    this.typeService.getAll()
  }

  ngOnDestroy() {
    if (!!this.dialogCloseSub) {
      this.dialogCloseSub.unsubscribe();
    }
  }

  onAdd(event: Timesheet) {
    this.timesheetService.add(event);
  }

  onUpdate(timesheet: Timesheet) {
    this.timesheetService.update(timesheet);
  }

  onDelete(timesheet: Timesheet) {
    const dialogRef = this.dialog.open(BasicDialogComponent, {

      data: <DialogData>{
        title: 'Delete Timesheet',
        messsage: 'Are you sure you want to delete this timesheet entry?',
        type: 'warning'
      }
    });

    this.dialogCloseSub = dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.timesheetService.delete(timesheet);
      }
    })

  }

  submit() {
    this.selectedEntries.forEach(entry => {
      this.timesheetService.update({ ...entry, state: TimesheetStates.Submitted })
    });
  }

  onSelectedEntriesChanged(entries: Timesheet[]) {
    this.selectedEntries = entries;
  }

  createDraft(event) {
    this.draft = event;
  }
}
