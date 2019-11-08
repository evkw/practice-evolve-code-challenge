import { TestBed } from '@angular/core/testing';

import { TimeHelperService } from './time-helper.service';

describe('TimeHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeHelperService = TestBed.get(TimeHelperService);
    expect(service).toBeTruthy();
  });

  describe('secondsToHoursAndMinutes', () => {
    const testCases = [
      { test: 0, result: { hours: 0, minutes: 0 } },
      { test: 3600, result: { hours: 1, minutes: 0 } },
      { test: 7200, result: { hours: 2, minutes: 0 } }
    ];

    testCases.forEach(testCase => {
      it(`should convert ${testCase.test} to hours ${testCase.result.hours} and minutes ${testCase.result.minutes}`, () => {
        const service: TimeHelperService = TestBed.get(TimeHelperService);
        const result = service.secondsToHoursAndMinutes(testCase.test);
        expect(result).toEqual(testCase.result);
      });
    });
  });

  describe('minutesToNearest', () => {
    const testCases = [
      { test: { minutes: 0, nearest: 15 }, result: 0 },
      { test: { minutes: 3, nearest: 15 }, result: 15 },
      { test: { minutes: 15, nearest: 15 }, result: 15 },
      { test: { minutes: 16, nearest: 15 }, result: 30 },
      { test: { minutes: 31, nearest: 15 }, result: 45 },
      { test: { minutes: 46, nearest: 15 }, result: 60 }
    ];

    testCases.forEach(testCase => {
      it(`should convert ${testCase.test.minutes} to next nearest ${testCase.test.nearest} minutes ${testCase.result}`, () => {
        const service: TimeHelperService = TestBed.get(TimeHelperService);
        const result = service.minutesToNearest(
          testCase.test.minutes,
          testCase.test.nearest
        );
        expect(result).toEqual(testCase.result);
      });
    });
  });
});
