import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers, effects } from './index';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    CommonModule,
    EffectsModule.forRoot(effects)
  ]
})
export class CoreModule { }
