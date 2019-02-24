import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/welcome/welcome.module#WelcomeModule' },
  { path: 'material', loadChildren: './modules/material/material.module#MaterialModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: true,
    }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
