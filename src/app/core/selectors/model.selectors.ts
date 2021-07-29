import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IModel, IStore, RepositoryItem } from '../models';

export const selectModel = createFeatureSelector<IStore, IModel>('model');

export const selectRepositories = createSelector(
  selectModel,
  (model: IModel): RepositoryItem[] => model.repositories,
);
