import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import {
  selectSearch,
  selectRepositories,
  selectIsShowSpinner,
  selectRepositoryFiltersOpenIssues
} from '../../../core/selectors';
import { OpenIssue, RepositoryItem } from '../../../core/models';
import {UserLocalSettingsActions} from "../../../core/actions";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  private openIssues$: Observable<OpenIssue> = this.store.pipe(select(selectRepositoryFiltersOpenIssues));
  private repositories$: Observable<RepositoryItem[]> = this.store.pipe(select(selectRepositories));

  public search$: Observable<string> = this.store.pipe(select(selectSearch));
  public isShowSpinner$: Observable<boolean> = this.store.pipe(select(selectIsShowSpinner));
  public openIssues: OpenIssue = '0';

  public repositories: RepositoryItem[] = [];
  public filteredRepositories: RepositoryItem[] = [];
  public keyList: string[] = [
    'name',
    'full_name',
    'url',
    'open_issues',
    'private',
    'homepage',
    'language',
  ];

  public constructor (
    private store: Store,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.repositories$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(repositories => {
        this.repositories = repositories;
        this.getFilteredRepositoryList();
      });

    this.openIssues$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(openIssues => {
        this.openIssues = openIssues;
        this.getFilteredRepositoryList();
      });
  }

  public getFilteredRepositoryList() {
    this.filteredRepositories = this.repositories
      .filter(repository => repository['open_issues'] > this.openIssues);
  }

  public onClickItem(url: string) {
    this.store.dispatch(UserLocalSettingsActions.setIsShowSpinnerStore({ payload: true }));
    this.store.dispatch(UserLocalSettingsActions.sendGithubRequestByCurrentRepositoryUrl({ payload: url }));
    this.router.navigateByUrl('/current-repository').then(() => console.log('/current-repository'));
  }
}
