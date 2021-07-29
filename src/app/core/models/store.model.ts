export interface RepositoryItem {
  [key: string]: any;
}

export interface IModel {
  repositories: RepositoryItem[];
}

export interface IUserLocalSettings {
  search: string;
  isShowSpinner: boolean;
}

export interface IStore {
  model?: IModel;
  userLocalSettings?: IUserLocalSettings;//TODO check for void 0
}
