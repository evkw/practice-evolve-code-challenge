import * as actions from '../actions';
import { ofType, Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { mergeMap, map as rxjsMap, catchError, withLatestFrom } from 'rxjs/operators';
import { TimesheetService } from '@features/timesheet/services/timesheet.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTimesheetDraft, selectSelectedTimesheetEntries } from '../selectors/timesheet.selector';

@Injectable()
export class TimesheetEffects {
    @Effect()
    loadTimesheetsStart$ = this.actions$.pipe(
        ofType<actions.LoadTimesheetsStart>(actions.TimesheetActionTypes.LoadTimesheetsStart),
        mergeMap(() =>
            this._timesheetSvc.getTimesheetEntries().pipe(
                rxjsMap(result => new actions.LoadTimesheetsSuccess(result)),
                catchError(error => of(new actions.LoadTimesheetsFailure(error)))
            )
        )
    );

    @Effect()
    saveDraftTimesheetStart$ = this.actions$.pipe(
        ofType<actions.SaveTimesheetDraftStart>(actions.TimesheetActionTypes.SaveTimesheetDraftStart),
        withLatestFrom(this._store.select(selectTimesheetDraft)),
        mergeMap(data => this._timesheetSvc.saveDraft(data[1]).pipe(
            mergeMap(() => [
                new actions.SaveTimesheetDraftSuccess(),
                new actions.LoadTimesheetsStart()
            ]),
            catchError(error => of(new actions.SaveTimesheetDraftFailure(error)))
        )
        )
    );

    @Effect()
    submitTimesheetEntriesStart$ = this.actions$.pipe(
        ofType<actions.SubmitTimesheetEntriesStart>(actions.TimesheetActionTypes.SubmitTimesheetEntriesStart),
        withLatestFrom(this._store.select(selectSelectedTimesheetEntries)),
        mergeMap(data => this._timesheetSvc.submitEntries(data[1]).pipe(
            mergeMap(() => [
                new actions.SubmitTimesheetEntriesSuccess(),
                new actions.LoadTimesheetsStart()
            ]),
            catchError(error => of(new actions.SubmitTimesheetEntriesFailure(error)))
        ))
    );

    constructor(
        private actions$: Actions,
        private _timesheetSvc: TimesheetService,
        private _store: Store<any>
    ) { }
}