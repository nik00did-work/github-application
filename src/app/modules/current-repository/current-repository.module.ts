import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CurrentRepositoryRoutingModule } from './current-repository-routing.module';

import { CurrentRepositoryComponent } from './current-repository.component';

@NgModule({
  declarations: [
    CurrentRepositoryComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CurrentRepositoryRoutingModule,
  ]
})
export class CurrentRepositoryModule { }
