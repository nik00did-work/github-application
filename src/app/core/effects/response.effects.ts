import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom, mergeMap } from 'rxjs/operators';

import { ModelActions, ResponseActions, UserLocalSettingsActions } from '../actions';
import { selectSearch } from '../selectors';

@Injectable()
export class ResponseEffects {
  public constructor(
    private store: Store,
    private actions: Actions,
  ) {}

  public setGithubRequestBySearchResponse = createEffect(() => this.actions.pipe(
    ofType(ResponseActions.setGithubRequestBySearchResponse),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectSearch))),
    mergeMap(async ([data, search]) => {
      if (!search) {
        return;
      }

      this.store.dispatch(ModelActions.setRepositoriesDataStore({ payload: data.items }))
    })
  ), { dispatch: false });

  public setGithubRequestByCurrentRepositoryUrlResponse = createEffect(() => this.actions.pipe(
    ofType(ResponseActions.setGithubRequestByCurrentRepositoryUrlResponse),
    map(action => action.payload),
    map( data => UserLocalSettingsActions.setCurrentRepositoryDataStore({ payload: data }))
  ));
}
