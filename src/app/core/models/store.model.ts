export interface RepositoryItem {
  [key: string]: any;
}

export interface IModel {
  repositories: RepositoryItem[];
}

export type OpenIssue = '0' | '10' | '100' | '300';

export interface IRepositoryFilters {
  openIssues: OpenIssue;
}

export interface IUserLocalSettings {
  search: string;
  isShowSpinner: boolean;
  repositoryFilters: IRepositoryFilters;
  currentRepository: RepositoryItem | null;
}

export interface IStore {
  model?: IModel;
  userLocalSettings?: IUserLocalSettings;//TODO check for void 0
}
