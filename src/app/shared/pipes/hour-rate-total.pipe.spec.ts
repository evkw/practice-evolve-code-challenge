import { TestBed } from '@angular/core/testing';
import { HourlyRateTotalPipe } from './hour-rate-total.pipe';
import { TimeHelperService } from '@shared/services/time-helper.service';

describe('HourlyRateTotalPipe', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('create an instance', () => {
    const service: TimeHelperService = TestBed.get(TimeHelperService);
    const pipe = new HourlyRateTotalPipe(service);
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    const testCases = [
      { test: { duration: 3600, hourlyRate: 100 }, result: 100 },
      { test: { duration: 7200, hourlyRate: 100 }, result: 200 }
    ];
    testCases.forEach(testCase => {
      it(`should pipe duration ${testCase.test.duration} and hourlyRate ${testCase.test.hourlyRate} to ${testCase.result}`, () => {
        const service: TimeHelperService = TestBed.get(TimeHelperService);
        const pipe = new HourlyRateTotalPipe(service);
        expect(pipe.transform(null, testCase.test.duration, testCase.test.hourlyRate)).toEqual(testCase.result
        );
      });
    });
  });

  describe('calculateRateForHours', () => {
    const testCases = [
      { test: { hours: 2, hourlyRate: 100 }, result: 200 },
      { test: { hours: 3, hourlyRate: 100 }, result: 300 },
      { test: { hours: 3, hourlyRate: 250.5 }, result: 751.5 }
    ];
    testCases.forEach(testCase => {
      it(`should calculate hours ${testCase.test.hours} and hourlyRate ${testCase.test.hourlyRate} to ${testCase.result}`, () => {
        const service: TimeHelperService = TestBed.get(TimeHelperService);
        const pipe = new HourlyRateTotalPipe(service);
        expect(
          pipe.calculateRateForHours(
            testCase.test.hours,
            testCase.test.hourlyRate
          )
        ).toEqual(testCase.result);
      });
    });
  });

  describe('calculateRateForMinutes', () => {
    const testCases = [
      { test: { minutes: 2, hourlyRate: 100 }, result: 25 },
      { test: { minutes: 15, hourlyRate: 100 }, result: 25 },
      { test: { minutes: 16, hourlyRate: 100 }, result: 50 }
    ];
    testCases.forEach(testCase => {
      it(`should round ${testCase.test.minutes} minutes to next 15 and calculate with hourlyRate ${testCase.test.hourlyRate} to ${testCase.result}`, () => {
        const service: TimeHelperService = TestBed.get(TimeHelperService);
        const pipe = new HourlyRateTotalPipe(service);
        expect(
          pipe.calculateRateForMinutes(
            testCase.test.minutes,
            testCase.test.hourlyRate
          )
        ).toEqual(testCase.result);
      });
    });
  });
});
