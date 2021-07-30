import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentRepositoryComponent } from './current-repository.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentRepositoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRepositoryRoutingModule { }
