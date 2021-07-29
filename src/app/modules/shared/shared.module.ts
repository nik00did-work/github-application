import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    InputComponent,
    SpinnerComponent
  ],
  exports: [
    InputComponent,
    SpinnerComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class SharedModule { }
