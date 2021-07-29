import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { catchError, debounceTime, map, switchMap, withLatestFrom, mergeMap } from 'rxjs/operators';

import { SearchService } from '../services';
import { UserLocalSettingsActions } from '../actions';
import { selectSearch } from '../selectors';

@Injectable()
export class SearchEffects {
  public constructor(
    private store: Store,
    private actions: Actions,
    private searchService: SearchService,
  ) {}

  public sendGithubRequestBySearch = createEffect(() => this.actions.pipe(
    ofType(UserLocalSettingsActions.sendGithubRequestBySearch),
    debounceTime(500),
    switchMap(action => this.searchService.sendGetRequest(action.payload).pipe(
      map(data => {
        console.log('data', data);

        this.store.dispatch(UserLocalSettingsActions.setIsShowSpinnerStore({ payload: false }));

        return UserLocalSettingsActions.setResponse({ payload: data })
      }),
      catchError(error => {
        console.log('error', error);
        throw new Error('sendGithubRequestBySearch error');
      })
    ))
  ));

  public setResponse = createEffect(() => this.actions.pipe(
    ofType(UserLocalSettingsActions.setResponse),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectSearch))),
    mergeMap(async ([data, search]) => {
      console.log('setResponse data, payload', data, search);

      if (!search) {//TODO check condition
        return;
      }

      this.store.dispatch(UserLocalSettingsActions.setRepositoriesDataStore({ payload: data }))
    })
  ), { dispatch: false })
}
