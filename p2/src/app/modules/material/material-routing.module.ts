import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialComponent } from './material.component';

const routes: Routes = [
  { path: '', component: MaterialComponent },
];

@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class MaterialRoutingModule { }
