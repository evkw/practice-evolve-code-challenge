import { Pipe, PipeTransform } from '@angular/core';
import { Timesheet } from '../models';
import { TimeHelperService } from '@shared/services/time-helper.service';

@Pipe({
  name: 'timesheetDuration'
})
export class TimesheetDurationPipe implements PipeTransform {
  constructor(private _timeHelperSvc: TimeHelperService) {}
  transform(value: Timesheet, args?: any): any {
    const { duration } = value;
    const { hours, minutes } = this._timeHelperSvc.secondsToHoursAndMinutes(
      duration
    );
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  }
}
