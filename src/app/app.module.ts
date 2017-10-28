///<reference path="landing/pipes/filter.pipe.ts"/>
///<reference path="landing/pipes/shorten.pipe.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {ObservableComponent} from './landing/observable/observable.component';
import {FormsComponent} from './landing/forms/forms.component';
import {HttpComponent} from './landing/http/http.component';
import {HttpModule} from '@angular/http';
import {AuthenticationComponent} from './landing/authentication/authentication.component';
import {AuthModule} from './landing/authentication/auth.module';
import {CoreModule} from './core/core.module';
import { AnimationComponent } from './landing/animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabindingComponent } from './landing/databinding/databinding.component';
import { PipesComponent } from './landing/pipes/pipes.component';
import { DirectivesComponent } from './landing/directives/directives.component';
import { ShortenPipe } from './landing/pipes/shorten.pipe';
import {FilterPipe} from './landing/pipes/filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  // define components, directives and pipes to use
  declarations: [
    AppComponent,
    FormsComponent,
    ObservableComponent,
    HttpComponent,
    AuthenticationComponent,
    AnimationComponent,
    DatabindingComponent,
    PipesComponent,
    DirectivesComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    // define other modules, way to sawing time to import all components in modules
    // custom modules (feature modules)
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    FormsModule
  ],
  // define services
  providers: [],
  // define root component, starting point
  bootstrap: [AppComponent]
})
export class AppModule {
}
