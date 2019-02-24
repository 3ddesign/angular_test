import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
  ],
})
export class MaterialModule { }
