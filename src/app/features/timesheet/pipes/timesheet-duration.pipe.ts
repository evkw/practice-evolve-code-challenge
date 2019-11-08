import { Pipe, PipeTransform } from '@angular/core';
import { Timesheet } from '../models';

@Pipe({
  name: 'timesheetDuration'
})
export class TimesheetDurationPipe implements PipeTransform {
  transform(value: Timesheet, args?: any): any {
    const { duration } = value;
    return `${this.getHours(duration)}:${this.getMinutes(duration)}`;
  }

  getHours(duration: number) {
    return Math.floor(duration / 3600);
  }

  getMinutes(duration: number, padding = 2) {
    return Math.floor((duration % 3600) / 60)
      .toString()
      .padStart(padding, '0');
  }
}
