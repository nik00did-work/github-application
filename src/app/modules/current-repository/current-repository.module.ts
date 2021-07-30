import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentRepositoryComponent } from './current-repository.component';
import { CurrentRepositoryRoutingModule } from './current-repository-routing.module';

@NgModule({
  declarations: [
    CurrentRepositoryComponent
  ],
  imports: [
    CommonModule,
    CurrentRepositoryRoutingModule,
  ]
})
export class CurrentRepositoryModule { }
