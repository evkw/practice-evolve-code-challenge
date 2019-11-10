import { DurationPipe } from './duration.pipe';
import { HourlyRateTotalPipe } from './hour-rate-total.pipe';

export const sharedPipes = [DurationPipe, HourlyRateTotalPipe];

export * from './duration.pipe';
export * from './hour-rate-total.pipe';  