import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpreadSheetsModule } from '../assets/lib/spreadjs/gc.spread.sheets.angular.12.0.7';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadSheetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
