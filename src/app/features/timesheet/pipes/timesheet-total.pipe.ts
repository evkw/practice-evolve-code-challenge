import { Pipe, PipeTransform } from '@angular/core';
import { Timesheet } from '../models';

@Pipe({
  name: 'timesheetTotal'
})
export class TimesheetTotalPipe implements PipeTransform {

  transform(value: Timesheet, args?: any): any {
    const {duration, hourlyRate} = value;
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor(duration % 3600 / 60);
    const roundedMinutes = (15 * Math.ceil(minutes / 15));
    const hourRate = hours * hourlyRate;
    const minuteRate = roundedMinutes / 60 * hourlyRate;


    return hourRate + minuteRate;
  }

}