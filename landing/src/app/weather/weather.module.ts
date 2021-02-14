import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';



@NgModule({
  declarations: [ForecastComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }
