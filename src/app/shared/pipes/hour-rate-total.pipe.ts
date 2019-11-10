import { Pipe, PipeTransform } from '@angular/core';
import { TimeHelperService } from '@shared/services/time-helper.service';

@Pipe({
  name: 'hourlyTotal'
})
export class HourlyRateTotalPipe implements PipeTransform {
  constructor(private timeHelperSvc: TimeHelperService) {}

  transform(value: any, duration: number, hourlyRate: number): any {
    const { hours, minutes } = this.timeHelperSvc.secondsToHoursAndMinutes(duration);

    const hourRate = this.calculateRateForHours(hours, hourlyRate);
    const minuteRate = this.calculateRateForMinutes(minutes, hourlyRate);

    return hourRate + minuteRate;
  }

  calculateRateForHours(hours: number, hourlyRate: number) {
    return hours * hourlyRate;
  }

  calculateRateForMinutes(minutes: number, hourlyRate: number) {
    const roundedMinutes = this.timeHelperSvc.minutesToNearest(minutes, 15);
    return (roundedMinutes / 60) * hourlyRate;
  }
}
