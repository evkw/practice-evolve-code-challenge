import { IsEditable, IsSelectable } from 'src/app/shared/models';

export interface Timesheet extends IsEditable, IsSelectable {
  id: number;
  state: 'Active' | 'Submitted';
  title: string;
  type: 'Telephone Call' | 'Research and Drafting Document';
  duration: number;
  hourlyRate: number;
  total: number;
  isEditing: boolean;
  isSelected: boolean;
}