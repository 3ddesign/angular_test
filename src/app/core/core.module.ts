import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../_shared/shared.module';
import {AppRoutingModule} from '../routing.module';
import {CommonModule} from '@angular/common';
import {HttpService} from '../services/http.service';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from '../services/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuard],
})
export class CoreModule {
}
