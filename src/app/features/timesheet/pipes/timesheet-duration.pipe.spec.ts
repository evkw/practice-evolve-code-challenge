import { TestBed } from '@angular/core/testing';
import { TimesheetDurationPipe } from './timesheet-duration.pipe';
import { Timesheet } from '../models';
import { TimeHelperService } from '@shared/services/time-helper.service';

describe('TimesheetDurationPipe', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('create an instance', () => {
    const service: TimeHelperService = TestBed.get(TimeHelperService);
    const pipe = new TimesheetDurationPipe(service);
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    const testCases = [
      { test: { duration: 3600 }, result: '1:00' },
      { test: { duration: 7200 }, result: '2:00' },
      { test: { duration: 4500 }, result: '1:15' },
      { test: { duration: 156700 }, result: '43:31' }
    ];
    testCases.forEach(testCase => {
      it(`should pipe duration ${testCase.test.duration} to format ${testCase.result}`, () => {
        const service: TimeHelperService = TestBed.get(TimeHelperService);
        const pipe = new TimesheetDurationPipe(service);
        expect(pipe.transform(testCase.test as Timesheet)).toEqual(
          testCase.result
        );
      });
    });
  });
});
