import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class TypeService extends EntityCollectionServiceBase<string> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Type', serviceElementsFactory);
  }
}
