import { EntityDataModule, EntityCacheEffects, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { entityConfig } from '../entity-metadata';
import { NgModule } from '@angular/core';

export class TestDataService {
  add = jasmine.createSpy('add');
  delete = jasmine.createSpy('delete');
  getAll = jasmine.createSpy('getAll');
  getById = jasmine.createSpy('getById');
  getWithQuery = jasmine.createSpy('getWithQuery');
  update = jasmine.createSpy('update');

  getService() {
    return this;
  }
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    { provide: EntityCacheEffects, useValue: {} },
    { provide: EntityDataService, useClass: TestDataService },
  ]
})
export class TestBaseModule {
}
