import { TestBed } from '@angular/core/testing';

import { TimesheetService } from './timesheet.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityCacheEffects, EntityDataService } from '@ngrx/data';
import { entityConfig } from 'src/app/entity-metadata';
import { TestDataService } from 'src/app/spec/data-service-test';

describe('TimesheetService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            StoreModule.forRoot({}),
            EffectsModule.forRoot([]),
            EntityDataModule.forRoot(entityConfig)
        ],
        providers: [
            TimesheetService,
            { provide: EntityCacheEffects, useValue: {} },
            { provide: EntityDataService, useClass: TestDataService },
        ]
    }));

    it('should be created', () => {
        const service: TimesheetService = TestBed.get(TimesheetService);
        expect(service).toBeTruthy();
    });
});
