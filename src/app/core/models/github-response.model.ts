import { IRepositoryItem } from './store.model';

export interface IGithubResponse {
  items: IRepositoryItem[];
  incomplete_results: boolean;
  total_count: number;
}
