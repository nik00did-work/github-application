import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsShowSpinner, selectRepositories } from '../../../core/selectors';
import { RepositoryItem } from '../../../core/models';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  public isShowSpinner$: Observable<boolean> = this.store.pipe(select(selectIsShowSpinner));
  private repositories$: Observable<RepositoryItem[]> = this.store.pipe(select(selectRepositories));

  public repositories: RepositoryItem[] = [];

  public constructor (private store: Store) {}

  public ngOnInit() {
    this.repositories$
      .pipe(takeUntil(this.unsubscribe$)).subscribe(repositories => this.repositories = repositories)
  }
}
