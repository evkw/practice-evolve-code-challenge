import { EntityDataModule, EntityCacheEffects, EntityDataService, DefaultDataServiceConfig } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { entityConfig } from '../entity-metadata';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Timesheet } from '@features/timesheet/models';
import { defaultDataServiceConfig } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '@core/in-memory-data.service';
import { of, timer, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

export interface TestDataServiceMethod {
  add: jasmine.Spy;
  delete: jasmine.Spy;
  getAll: jasmine.Spy;
  getById: jasmine.Spy;
  getWithQuery: jasmine.Spy;
  update: jasmine.Spy;
}

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

  setResponse(methodName: keyof TestDataServiceMethod, data: any) {
    this[methodName].and.returnValue(of(data).pipe(delay(1)));
  }

  setErrorResponse(methodName: keyof TestDataServiceMethod, error: any) {
    // Following won't quite work because delay does not appear to delay an error
    // this[methodName].and.returnValue(throwError(error).pipe(delay(1)));
    // Use timer instead
    this[methodName].and.returnValue(timer(1).pipe(mergeMap(() => throwError(error))));
  }
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    NoopAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService),
  ],
  providers: [
    { provide: EntityCacheEffects, useValue: {} },
    { provide: EntityDataService, useClass: TestDataService },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class TestBaseModule {
}

export const mockTimesheet: Timesheet = {
  id: '1',
  title: 'MockTimeSheet',
  type: 'Research',
  state: 'Active',
  duration: 3600,
  hourlyRate: 100,
  isEditing: false,
  isSelected: false,
}

export const mockTimesheet2: Timesheet = {
  id: '2',
  title: 'MockTimeSheet2',
  type: 'Preparing Document',
  state: 'Submitted',
  duration: 3600,
  hourlyRate: 100,
  isEditing: false,
  isSelected: false,
}