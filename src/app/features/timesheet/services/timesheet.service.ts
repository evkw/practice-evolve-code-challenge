import { Injectable } from '@angular/core';
import { Timesheet } from '../models';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class TimesheetService extends EntityCollectionServiceBase<Timesheet> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Timesheet', serviceElementsFactory);
  }
}
