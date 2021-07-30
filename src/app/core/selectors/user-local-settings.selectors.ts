import { createSelector, createFeatureSelector } from '@ngrx/store';
import {IStore, IUserLocalSettings, OpenIssue, RepositoryItem} from '../models';

export const selectUserLocalSettings = createFeatureSelector<IStore, IUserLocalSettings>('userLocalSettings');

export const selectSearch = createSelector(
  selectUserLocalSettings,
  (userLocalSettings: IUserLocalSettings): string => userLocalSettings.search,
);

export const selectIsShowSpinner = createSelector(
  selectUserLocalSettings,
  (userLocalSettings: IUserLocalSettings): boolean => userLocalSettings.isShowSpinner,
);

export const selectRepositoryFiltersOpenIssues = createSelector(
  selectUserLocalSettings,
  (userLocalSettings: IUserLocalSettings): OpenIssue => userLocalSettings.repositoryFilters.openIssues,
);

export const selectCurrentRepository = createSelector(
  selectUserLocalSettings,
  (userLocalSettings: IUserLocalSettings): any => userLocalSettings.currentRepository,//set types
);

