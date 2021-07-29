import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    MainComponent,
    ItemListComponent,
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScrollingModule,
  ]
})
export class MainModule { }
