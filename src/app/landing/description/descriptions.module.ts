import { NgModule } from '@angular/core';
import { DescriptionComponent } from './description.component';
import { DescriptionsRoutingModule } from './descriptions-routing.module';
import { JsComponent } from './js/js.component';
import { AngularComponent } from './angular/angular.component';
@NgModule({
  declarations: [
    DescriptionComponent,
    JsComponent,
    AngularComponent

  ],
  imports: [
    DescriptionsRoutingModule
  ]
})
export class DescriptionsModule {}
