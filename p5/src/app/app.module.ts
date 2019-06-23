import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSortableModule } from 'ngx-sortable'
import { SortablejsModule } from 'ngx-sortablejs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSortableModule,
    SortablejsModule.forRoot({ }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
