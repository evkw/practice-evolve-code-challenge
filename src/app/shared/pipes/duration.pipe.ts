import { Pipe, PipeTransform } from '@angular/core';
import { TimeHelperService } from '@shared/services/time-helper.service';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  constructor(private _timeHelperSvc: TimeHelperService) {}
  transform(value: any, duration?: any): any {
    const { hours, minutes } = this._timeHelperSvc.secondsToHoursAndMinutes(
      duration
    );
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  }
}
