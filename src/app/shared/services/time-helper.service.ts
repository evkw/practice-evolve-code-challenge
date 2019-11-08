import { Injectable } from '@angular/core';
import { SecondsToHoursAndMinutesResult } from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class TimeHelperService {
  constructor() {}

  secondsToHoursAndMinutes(seconds: number): SecondsToHoursAndMinutesResult {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return { hours, minutes };
  }

  minutesToNearest(minutes: number, nearest: number): number {
    return nearest * Math.ceil(minutes / nearest);
  }
}
