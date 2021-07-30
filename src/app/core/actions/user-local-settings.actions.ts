import { createAction, props } from '@ngrx/store';
import constants from '../../constants';
import { OpenIssue, RepositoryItem } from '../models';

export const setSearchStore = createAction(
  constants.SET_SEARCH_STORE,
  props<{ payload: string }>()
);
export const sendGithubRequestBySearch = createAction(//TODO rename and refactor action sendRequest actions
  constants.SEND_GITHUB_REQUEST_BU_SEARCH,
  props<{ payload: string }>()
);

export const setResponse = createAction(//TODO rename and refactor action
  constants.SET_RESPONSE,
  props<{ payload: any }>()
);
export const setRepositoriesDataStore = createAction(//TODO rename and refactor action model actions
  constants.SET_REPOSITORIES_DATA_STORE,
  props<{ payload: any }>()
);

export const setIsShowSpinnerStore = createAction(
  constants.SET_IS_SHOW_SPINNER_STORE,
  props<{ payload: boolean }>()
);

export const setOpenIssuesValueStore = createAction(
  constants.SET_OPEN_ISSUES_VALUE_STORE,
  props<{ payload: any }>()
);

export const sendGithubRequestByCurrentRepositoryUrl = createAction(
  constants.SEND_GITHUB_REQUEST_BY_CURRENT_REPOSITORY_URL,
  props<{ payload: string }>()
);


export const setCurrentRepositoryData = createAction(
  constants.SET_CURRENT_REPOSITORY_DATA,
  props<{ payload: any }>()
);

export const setCurrentRepositoryDataStore = createAction(
  constants.SET_CURRENT_REPOSITORY_DATA_STORE,
  props<{ payload: any }>()
);

