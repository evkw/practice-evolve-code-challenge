import { TestBed } from '@angular/core/testing';
import { EntityCollectionServiceElementsFactory, EntityDataModule, EntityCacheEffects, EntityDataService } from '@ngrx/data';

import { TypeService } from './type.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from 'src/app/entity-metadata';
import { TestDataService } from 'src/app/spec/data-service-test';


describe('TypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      EntityDataModule.forRoot(entityConfig)
    ],
    providers: [
      TypeService,
      { provide: EntityCacheEffects, useValue: {} },
      { provide: EntityDataService, useClass: TestDataService },
    ]
  }));

  it('should be created', () => {
    const service: TypeService = TestBed.get(TypeService);
    expect(service).toBeTruthy();
  });
});

