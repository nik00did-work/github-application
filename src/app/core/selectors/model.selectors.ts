import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IModel, IStore, IRepositoryItem } from '../models';

export const selectModel = createFeatureSelector<IStore, IModel>('model');

export const selectRepositories = createSelector(
  selectModel,
  (model: IModel): IRepositoryItem[] => model.repositories,
);
