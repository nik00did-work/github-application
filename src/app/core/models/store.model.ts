export interface IRepositoryItem {
  [key: string]: any;
}

export interface IModel {
  repositories: IRepositoryItem[];
}

export type OpenIssue = '0' | '10' | '100' | '300';

export interface IRepositoryFilters {
  openIssues: OpenIssue;
}

export interface IUserLocalSettings {
  search: string;
  isShowSpinner: boolean;
  repositoryFilters: IRepositoryFilters;
  currentRepository: IRepositoryItem | null;
}

export interface IStore {
  model?: IModel;
  userLocalSettings?: IUserLocalSettings;
}
