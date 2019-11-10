import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { TimesheetType } from '../models';

@Injectable()
export class TypeService extends EntityCollectionServiceBase<TimesheetType> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Type', serviceElementsFactory);
  }
}
