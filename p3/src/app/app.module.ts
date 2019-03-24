import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpreadSheetsModule } from '../assets/lib/spreadjs/gc.spread.sheets.angular.12.0.9';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SpreadSheetsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
