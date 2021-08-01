import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';

import { GithubService } from '../services';
import { ResponseActions, UserLocalSettingsActions } from '../actions';

@Injectable()
export class GithubEffects {
  public constructor(
    private store: Store,
    private actions: Actions,
    private searchService: GithubService,
  ) {}

  public sendGithubRequestBySearch = createEffect(() => this.actions.pipe(
    ofType(UserLocalSettingsActions.sendGithubRequestBySearch),
    map(action => `https://api.github.com/search/repositories?q=${action.payload}&per_page=100`),
    debounceTime(500),
    switchMap(url => this.searchService.sendGetRequest(url).pipe(
      map(data => {
        this.store.dispatch(UserLocalSettingsActions.setIsShowSpinnerStore({ payload: false }));

        return ResponseActions.setGithubRequestBySearchResponse({ payload: data })
      }),
      catchError(error => {
        console.log('error', error);
        throw new Error('sendGithubRequestBySearch error');
      })
    ))
  ));

  public sendGithubRequestByCurrentRepositoryUrl = createEffect(() => this.actions.pipe(
    ofType(UserLocalSettingsActions.sendGithubRequestByCurrentRepositoryUrl),
    switchMap(action => this.searchService.sendGetRequest(action.payload).pipe(
      map(data => {
        this.store.dispatch(UserLocalSettingsActions.setIsShowSpinnerStore({ payload: false }));

        return ResponseActions.setGithubRequestByCurrentRepositoryUrlResponse({ payload: data });
      }),
      catchError(error => {
        console.log('error', error);
        throw new Error('sendGithubRequestByCurrentRepositoryUrl error');
      })
    ))
  ));
}
