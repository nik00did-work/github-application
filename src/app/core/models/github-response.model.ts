import { RepositoryItem } from './store.model';

export interface IGithubResponse {
  items: RepositoryItem[];
  incomplete_results: boolean;
  total_count: number;
}
