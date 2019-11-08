import * as TimesheetActions from './timesheet.actions';

describe('Timesheet', () => {
  it('should create an instance', () => {
    expect(new TimesheetActions.LoadTimesheetsStart()).toBeTruthy();
  });
});
