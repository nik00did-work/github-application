import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCurrentRepository } from "../../core/selectors";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-current-repository',
  templateUrl: './current-repository.component.html',
  styleUrls: ['./current-repository.component.less']
})
export class CurrentRepositoryComponent {
  currentRepository$: Observable<any> = this.store.pipe(select(selectCurrentRepository));

  constructor(private store: Store) { }
}
