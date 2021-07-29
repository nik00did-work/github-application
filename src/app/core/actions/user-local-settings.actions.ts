import { createAction, props } from '@ngrx/store';
import constants from '../../constants';

export const setSearchStore = createAction(
  constants.SET_SEARCH_STORE,
  props<{ payload: string }>()
);
export const sendGithubRequestBySearch = createAction(//TODO rename and refactor action
  constants.SEND_GITHUB_REQUEST_BU_SEARCH,
  props<{ payload: string }>()
);

export const setResponse = createAction(//TODO rename and refactor action
  constants.SET_RESPONSE,
  props<{ payload: any }>()
);
export const setRepositoriesDataStore = createAction(//TODO rename and refactor action
  constants.SET_REPOSITORIES_DATA_STORE,
  props<{ payload: any }>()
);

export const setIsShowSpinnerStore = createAction(
  constants.SET_IS_SHOW_SPINNER_STORE,
  props<{ payload: any }>()
);
