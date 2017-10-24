import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DescriptionComponent} from './description.component';

const descriptionsRouter: Routes = [
  { path: '', component: DescriptionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(descriptionsRouter)
  ],
  exports: [RouterModule]
})
export class DescriptionsRoutingModule {}
