import { TestBed } from '@angular/core/testing';
import { TimesheetDurationPipe } from './timesheet-duration.pipe';
import { Timesheet } from '../models';

describe('TimesheetDurationPipe', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('create an instance', () => {
    const pipe = new TimesheetDurationPipe();
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
        const pipe = new TimesheetDurationPipe();
        expect(pipe.transform(testCase.test as Timesheet)).toEqual(
          testCase.result
        );
      });
    });
  });

  describe('getHours', () => {
    const testCases = [
      { test: 3600, result: 1 },
      { test: 7200, result: 2 },
      { test: 4500, result: 1 },
      { test: 156700, result: 43 }
    ];
    testCases.forEach(testCase => {
      it(`should convert seconds ${testCase.test} to hours ${testCase.result}`, () => {
        const pipe = new TimesheetDurationPipe();
        expect(pipe.getHours(testCase.test)).toEqual(testCase.result);
      });
    });
  });

  describe('getMinutes', () => {
    const testCases = [
      { test: 3660, result: '01' },
      { test: 1200, result: '20' },
      { test: 0, result: '00' },
      { test: 45, result: '00' }
    ];
    testCases.forEach(testCase => {
      it(`should convert remaining seconds ${testCase.test} to minutes ${testCase.result}`, () => {
        const pipe = new TimesheetDurationPipe();
        expect(pipe.getMinutes(testCase.test)).toEqual(testCase.result);
      });
    });
  });
});
