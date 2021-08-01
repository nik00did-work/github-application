import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCurrentRepository, selectIsShowSpinner } from "../../core/selectors";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-current-repository',
  templateUrl: './current-repository.component.html',
  styleUrls: ['./current-repository.component.less']
})
export class CurrentRepositoryComponent {
  isShowSpinner$: Observable<any> = this.store.pipe(select(selectIsShowSpinner));
  currentRepository$: Observable<any> = this.store.pipe(select(selectCurrentRepository));

  public keyList: string[] = [
    'name',
    'full_name',
    'description',
    'id',
    'node_id',
    'url',
    'open_issues',
    'private',
    'homepage',
    'forks',
    'language',
    'events_url',
    'subscribers_count',
    'updated_at',
    'teams_url',
    'archive_url',
    'blobs_url',
  ];

  constructor(private store: Store) { }
}
