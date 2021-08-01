import { createAction, props } from '@ngrx/store';
import constants from '../../constants';
import { OpenIssue, IRepositoryItem } from '../models';

export const setSearchStore = createAction(
  constants.SET_SEARCH_STORE,
  props<{ payload: string }>()
);

export const setIsShowSpinnerStore = createAction(
  constants.SET_IS_SHOW_SPINNER_STORE,
  props<{ payload: boolean }>()
);

export const setOpenIssuesValueStore = createAction(
  constants.SET_OPEN_ISSUES_VALUE_STORE,
  props<{ payload: OpenIssue }>()
);

export const setCurrentRepositoryDataStore = createAction(
  constants.SET_CURRENT_REPOSITORY_DATA_STORE,
  props<{ payload: IRepositoryItem }>()
);

