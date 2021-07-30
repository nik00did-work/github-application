import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { InputComponent } from './input/input.component';
import { IframeComponent } from './iframe/iframe.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    InputComponent,
    IframeComponent,
    SpinnerComponent,
    ToggleButtonComponent
  ],
  exports: [
    InputComponent,
    SpinnerComponent,
    ToggleButtonComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule
  ]
})
export class SharedModule { }
