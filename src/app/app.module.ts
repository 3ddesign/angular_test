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

@NgModule({
  // define components, directives and pipes to use
  declarations: [
    AppComponent,
    ObservableComponent,
    FormsComponent,
    HttpComponent,
    AuthenticationComponent,
    AnimationComponent,
  ],
  imports: [
    // define other modules, way to sawing time to import all components in modules
    // custom modules (feature modules)
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    CoreModule
  ],
  // define services
  providers: [],
  // define root component, starting point
  bootstrap: [AppComponent]
})
export class AppModule {
}
