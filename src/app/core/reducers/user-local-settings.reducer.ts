import { createReducer, on } from '@ngrx/store';
import { UserLocalSettingsActions as actions } from '../actions';

import { IUserLocalSettings } from '../models';

export const initialState: IUserLocalSettings = {
  search: '',
  isShowSpinner: false,
};

const _userLocalSettingsReducer = createReducer(
  initialState,
  on(actions.setSearchStore, (state, { payload }) => ({
    ...state,
    search: payload,
  })),
  on(actions.setIsShowSpinnerStore, (state, { payload }) => ({
    ...state,
    isShowSpinner: payload,
  })),
);

export const userLocalSettingsReducer = (state: any, action: any) => {
  return _userLocalSettingsReducer(state, action);
};
