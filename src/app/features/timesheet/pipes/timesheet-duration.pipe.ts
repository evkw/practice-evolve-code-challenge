import { Pipe, PipeTransform } from '@angular/core';
import { Timesheet } from '../models';

@Pipe({
  name: 'timesheetDuration'
})
export class TimesheetDurationPipe implements PipeTransform {

  transform(value: Timesheet, args?: any): any {
    const {duration} = value;

    // Convert seconds to hours;
    const h = Math.floor(duration / 3600);
    const m = Math.floor(duration % 3600 / 60).toString();
    return `${h}:${m.padStart(2, '0')}`;
  }

}