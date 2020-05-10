import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [InputComponent]
})
export class SharedModule { }
