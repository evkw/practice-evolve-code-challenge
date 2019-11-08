import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';

export const reducers: ActionReducerMap<any> = { };

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [logger] : [];
