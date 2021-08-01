import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

import { GithubActions, UserLocalSettingsActions } from '../../core/actions';
import { selectSearch } from '../../core/selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  private search$: Observable<string> = this.store.pipe(select(selectSearch));

  public search: string = '';

  public constructor (
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.search$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(search => this.search = search);
  }

  public onInputCallback(value: string): void {
    this.store.dispatch(UserLocalSettingsActions.setSearchStore({ payload: value }));

    if (!value) {
      return;
    }

    this.store.dispatch(UserLocalSettingsActions.setIsShowSpinnerStore({ payload: true }));
    this.store.dispatch(GithubActions.sendGithubRequestBySearch({ payload: value }));
  }
}
