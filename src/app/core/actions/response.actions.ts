import { createAction, props } from '@ngrx/store';
import constants from '../../constants';
import { IGithubResponse } from '../models';

export const setGithubRequestBySearchResponse = createAction(
  constants.SET_GITHUB_REQUEST_BY_SEARCH_RESPONSE,
  props<{ payload: IGithubResponse }>()
);

export const setGithubRequestByCurrentRepositoryUrlResponse = createAction(
  constants.SET_GITHUB_REQUEST_BY_CURRENT_REPOSITORY_URL_RESPONSE,
  props<{ payload: any }>()
);
