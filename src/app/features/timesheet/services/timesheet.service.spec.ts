import { TestBed } from '@angular/core/testing';
import { TimesheetService } from './timesheet.service';
import { TestBaseModule } from 'src/app/spec/data-service-test.spec';

describe('TimesheetService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [TestBaseModule],
        providers: [ TimesheetService ]
    }));

    it('should be created', () => {
        const service: TimesheetService = TestBed.get(TimesheetService);
        expect(service).toBeTruthy();
    });
});
