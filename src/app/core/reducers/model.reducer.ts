import { createReducer, on } from '@ngrx/store';

import { IModel } from '../models';
import { UserLocalSettingsActions as actions } from '../actions';

const initState: IModel = {
  repositories: [],
};

const _modelReducer = createReducer(
  initState,
  on(actions.setRepositoriesDataStore, (state, { payload }) => ({
      ...state,
      repositories: payload.items,
  })),
);

export const modelReducer = (state: any, action: any) => {
  return _modelReducer(state, action);
};
