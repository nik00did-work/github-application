import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { OpenIssue } from '../../../../core/models';
import { selectRepositoryFiltersOpenIssues } from '../../../../core/selectors';
import { UserLocalSettingsActions } from '../../../../core/actions';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent {
  public openIssues$: Observable<OpenIssue> = this.store.pipe(select(selectRepositoryFiltersOpenIssues));
  public openIssuesValues: OpenIssue[] = ['0', '10', '100', '300'];

  public constructor(
    private store: Store
  ) {}

  public setOpenIssues(value: OpenIssue): void {
    this.store.dispatch(UserLocalSettingsActions.setOpenIssuesValueStore({ payload: value }));
  }
}
