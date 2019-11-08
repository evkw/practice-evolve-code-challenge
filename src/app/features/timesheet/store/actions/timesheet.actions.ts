import { Action } from '@ngrx/store';
import { Timesheet, TimesheetUpdateParams, TimesheetEditParams, TimesheetSelectionParams } from '@features/timesheet/models';

export enum TimesheetActionTypes {
  LoadTimesheetsStart = '[Timesheet] Load Timesheets Start',
  LoadTimesheetsSuccess = '[Timesheet] Load Timesheets Success',
  LoadTimesheetsFailure = '[Timesheet] Load Timesheets Failure',

  CreateTimesheetDraft = '[Timesheet] Create Timesheet Draft',
  CancelTimesheetDraft = '[Timesheet] Cancel Timesheet Draft',
  SaveTimesheetDraftStart = '[Timesheet] Save Timesheet Draft Start',
  SaveTimesheetDraftSuccess = '[Timesheet] Save Timesheet Draft Success',
  SaveTimesheetDraftFailure = '[Timesheet] Save Timesheet Draft Failure',

  SetTimesheetRowEditing = '[Timesheet] Set Timesheet Row Editing',
  UpdateTimesheetStart = '[Timesheet] Update Timesheet Start',
  UpdateTimesheetSuccess = '[Timesheet] Update Timesheet Success',
  UpdateTimesheetFailure = '[Timesheet] Update Timesheet Failure',

  DeleteTimesheetStart = '[Timesheet] Delete Timesheet Start',
  DeleteTimesheetSuccess = '[Timesheet] Delete Timesheet Success',
  DeleteTimesheetFailure = '[Timesheet] Delete Timesheet Failure',

  UpdateTimesheetSelection = '[Timesheet] Update Timesheet Selection',

  SubmitTimesheetEntriesStart = '[Timesheet] Submit Timesheet Entries Start',
  SubmitTimesheetEntriesSuccess = '[Timesheet] Submit Timesheet Entries Success',
  SubmitTimesheetEntriesFailure = '[Timesheet] Submit Timesheet Entries Failure',
}

export class LoadTimesheetsStart implements Action {
  readonly type = TimesheetActionTypes.LoadTimesheetsStart;
}

export class LoadTimesheetsSuccess implements Action {
  readonly type = TimesheetActionTypes.LoadTimesheetsSuccess;
  constructor(public payload: Timesheet[]) { }
}

export class LoadTimesheetsFailure implements Action {
  readonly type = TimesheetActionTypes.LoadTimesheetsFailure;
  constructor(public payload: any) { }
}

export class CreateTimesheetDraft implements Action {
  readonly type = TimesheetActionTypes.CreateTimesheetDraft;
}

export class CancelTimesheetDraft implements Action {
  readonly type = TimesheetActionTypes.CancelTimesheetDraft;
}

export class SaveTimesheetDraftStart implements Action {
  readonly type = TimesheetActionTypes.SaveTimesheetDraftStart;
}

export class SaveTimesheetDraftSuccess implements Action {
  readonly type = TimesheetActionTypes.SaveTimesheetDraftSuccess;
}

export class SaveTimesheetDraftFailure implements Action {
  readonly type = TimesheetActionTypes.SaveTimesheetDraftFailure;
  constructor(public payload: any) {}
}

export class SetTimesheetRowEditing implements Action {
  readonly type = TimesheetActionTypes.SetTimesheetRowEditing;
  constructor(public payload: TimesheetEditParams) {}
}

export class UpdateTimesheetStart implements Action {
  readonly type = TimesheetActionTypes.UpdateTimesheetStart;
  constructor(public payload: TimesheetUpdateParams) {}
}

export class UpdateTimesheetSuccess implements Action {
  readonly type = TimesheetActionTypes.UpdateTimesheetStart;
}

export class UpdateTimesheetFailure implements Action {
  readonly type = TimesheetActionTypes.UpdateTimesheetFailure;
  constructor(public payload: any) {}
}

export class DeleteTimesheetStart implements Action {
  readonly type = TimesheetActionTypes.DeleteTimesheetStart;
  constructor(public payload: string) {}
}

export class DeleteTimesheetSuccess implements Action {
  readonly type = TimesheetActionTypes.DeleteTimesheetSuccess;
}

export class DeleteTimesheetFailure implements Action {
  readonly type = TimesheetActionTypes.DeleteTimesheetFailure;
  constructor(public payload: any) {}
}

export class UpdateTimesheetSelection implements Action {
  readonly type = TimesheetActionTypes.UpdateTimesheetSelection;
  constructor(public payload: TimesheetSelectionParams) {}
}

export class SubmitTimesheetEntriesStart implements Action {
  readonly type = TimesheetActionTypes.SubmitTimesheetEntriesStart;
}

export class SubmitTimesheetEntriesSuccess implements Action {
  readonly type = TimesheetActionTypes.SubmitTimesheetEntriesSuccess;
}

export class SubmitTimesheetEntriesFailure implements Action {
  readonly type = TimesheetActionTypes.SubmitTimesheetEntriesFailure;
  constructor(public payload: any) {}
}

export type TimesheetActions =
  | LoadTimesheetsStart
  | LoadTimesheetsSuccess
  | LoadTimesheetsFailure
  | CreateTimesheetDraft
  | CancelTimesheetDraft
  | SaveTimesheetDraftStart
  | SaveTimesheetDraftSuccess
  | SaveTimesheetDraftFailure
  | SetTimesheetRowEditing
  | UpdateTimesheetStart
  | UpdateTimesheetSuccess
  | UpdateTimesheetFailure
  | DeleteTimesheetStart
  | DeleteTimesheetSuccess
  | DeleteTimesheetFailure
  | UpdateTimesheetSelection
  | SubmitTimesheetEntriesStart
  | SubmitTimesheetEntriesSuccess
  | SubmitTimesheetEntriesFailure;
