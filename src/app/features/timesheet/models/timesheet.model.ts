import { IsEditable, IsSelectable } from 'src/app/shared/models';

export interface Timesheet extends IsEditable, IsSelectable {
  id: string;
  state: string;
  title: string;
  type: string;
  duration: number;
  hourlyRate: number;
}

export interface TimesheetUpdateParams {
  id: string;
  title: string;
  type: string;
  hours: number;
  minutes: number;
  hourlyRate: number;
}

export interface TimesheetType {
  id:number;
  name: string;
}

export interface TimesheetEditParams {
  id: string;
  isEditing: boolean;
}

export interface TimesheetSelectionParams {
  id: string;
  isSelected: boolean;
}
