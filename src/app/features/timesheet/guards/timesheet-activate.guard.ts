import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map as rxjsMap, switchMap, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectTimesheetLoaded } from '../store/selectors/timesheet.selector';
import * as actions from '../store/actions';

@Injectable()
export class TimesheetActivateGuard implements CanActivate {

  constructor(private _store: Store<any>) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore() {
    return this._store.pipe(select(selectTimesheetLoaded)).pipe(
      rxjsMap(timesheetsLoaded => {
        if (!timesheetsLoaded) {
          this._store.dispatch(new actions.LoadTimesheetsStart())
        }
        return timesheetsLoaded;
      }));
  }
}
