import { IsEditable, IsSelectable } from 'src/app/shared/models';

export interface Timesheet extends IsEditable, IsSelectable {
  id: string;
  state: string;
  title: string;
  type: string;
  duration: number;
  hourlyRate: number;
  total: number;
  isEditing: boolean;
  isSelected: boolean;
}

export interface TimesheetUpdateParams {
  id: string;
  title: string;
  type: string;
  duration: number;
  hourlyRate: number;
}

export interface TimesheetEditParams {
  id: string;
  isEditing: boolean;
}


export interface TimesheetSelectionParams {
  id: string;
  isSelected: boolean;
}