import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { FiltersComponent } from './item-list/filters/filters.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    MainComponent,
    ItemListComponent,
    FiltersComponent,
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScrollingModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
