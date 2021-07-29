import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStore, IUserLocalSettings } from '../models';

export const selectUserLocalSettings = createFeatureSelector<IStore, IUserLocalSettings>('userLocalSettings');

export const selectSearch = createSelector(
  selectUserLocalSettings,
  (userLocalSettings: IUserLocalSettings): string => userLocalSettings.search,
);

export const selectIsShowSpinner = createSelector(
  selectUserLocalSettings,
  (userLocalSettings: IUserLocalSettings): boolean => userLocalSettings.isShowSpinner,
);
