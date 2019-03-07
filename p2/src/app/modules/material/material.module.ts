import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import {MatAutocompleteModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MaterialRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    MatAutocompleteModule,
  ]
})
export class MaterialModule {

 }
