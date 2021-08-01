import { createAction, props } from '@ngrx/store';
import constants from '../../constants';
import { RepositoryItem } from '../models';

export const setRepositoriesDataStore = createAction(
  constants.SET_REPOSITORIES_DATA_STORE,
  props<{ payload: RepositoryItem[] }>()
);
