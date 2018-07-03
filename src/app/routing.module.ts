import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {FormsComponent} from './landing/forms/forms.component';
import {HttpComponent} from './landing/http/http.component';
import {ObservableComponent} from './landing/observable/observable.component';
import {SigninComponent} from './landing/authentication/signin/signin.component';
import {SignupComponent} from './landing/authentication/signup/signup.component';
import {AuthGuard} from './services/auth-guard.service';
import {HomeComponent} from './core/home/home.component';
import {AnimationComponent} from './landing/animation/animation.component';
import {DatabindingComponent} from './landing/databinding/databinding.component';
import {DirectivesComponent} from './landing/directives/directives.component';
import {PipesComponent} from './landing/pipes/pipes.component';
import {NgrxComponent} from './landing/ngrx/ngrx.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'description', loadChildren: './landing/description/descriptions.module#DescriptionsModule'},
  {path: 'forms', component: FormsComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'directives',  data: {testData: 'test'},  component: DirectivesComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'ngrx', component: NgrxComponent},
  {path: 'http', component: HttpComponent, canActivate: [AuthGuard]},
  {path: 'observable', component: ObservableComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  // { path: '**', component: FormsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // Use preloading:
    // RouterModule.forRoot(appRoutes,  {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
