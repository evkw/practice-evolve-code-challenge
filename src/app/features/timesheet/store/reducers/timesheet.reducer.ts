import { Timesheet } from '../../models';
import * as actions from '../actions';
import { DraftRowId } from '@features/timesheet/constants';

export const timesheetFeatureKey = 'timesheet';

const draft: Timesheet = {
  id: DraftRowId,
  state: null,
  title: null,
  type: null,
  duration: 0,
  hourlyRate: 250.5,
  isEditing: true,
  isSelected: false
};

export interface TimesheetState {
  loading: boolean;
  loaded: boolean;
  error: any;
  entries: Timesheet[];
}

export const initialState: TimesheetState = {
  loading: false,
  loaded: false,
  error: null,
  entries: []
};

export function reducer(
  state: TimesheetState = initialState,
  action: actions.TimesheetActions
) {
  switch (action.type) {
    case actions.TimesheetActionTypes.LoadTimesheetsStart: {
      return {
        ...state,
        loading: true
      };
    }

    case actions.TimesheetActionTypes.LoadTimesheetsSuccess: {
      return {
        ...state,
        entries: action.payload,
        loading: false,
        loaded: true
      };
    }

    case actions.TimesheetActionTypes.CreateTimesheetDraft: {
      return {
        ...state,
        entries: [draft, ...state.entries]
      };
    }

    case actions.TimesheetActionTypes.CancelTimesheetDraft: {
      return {
        ...state,
        entries: state.entries.filter(data => data.id !== DraftRowId)
      };
    }

    case actions.TimesheetActionTypes.SetTimesheetRowEditing: {
      return {
        ...state,
        entries: state.entries.map(data =>
          data.id === action.payload.id
            ? {
                ...data,
                isEditing: action.payload.isEditing,
                isSelected: false
              }
            : data
        )
      };
    }

    case actions.TimesheetActionTypes.UpdateTimesheetSelection: {
      return {
        ...state,
        entries: state.entries.map(data =>
          data.id === action.payload.id
            ? { ...data, isSelected: action.payload.isSelected }
            : data
        )
      };
    }

    case actions.TimesheetActionTypes.LoadTimesheetsFailure:
    case actions.TimesheetActionTypes.SaveTimesheetDraftFailure:
    case actions.TimesheetActionTypes.UpdateTimesheetFailure:
    case actions.TimesheetActionTypes.DeleteTimesheetFailure: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}

export const selectLoaded = (state: TimesheetState) => state.loaded;
export const selectTimesheetEntries = (state: TimesheetState) => state.entries;
export const selectTimesheetDraft = (state: TimesheetState) =>
  state.entries.find(data => data.id === DraftRowId);
export const selectSelectedTimesheetEntries = (state: TimesheetState) =>
  state.entries.filter(data => data.isSelected === true);
