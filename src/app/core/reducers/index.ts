import {
  MetaReducer,
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';
import { IStore } from '../models';

import { environment } from '../../../environments/environment';

import { modelReducer } from './model.reducer';
import { userLocalSettingsReducer } from './user-local-settings.reducer';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    !environment.production && ((window as any).getState = (): any => state);

    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<IStore> = {
  model: modelReducer,
  userLocalSettings: userLocalSettingsReducer,
};

export const metaReducers: MetaReducer<IStore>[] = !environment.production ? [debug] : [debug];
