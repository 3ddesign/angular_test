import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [{
  path: 'inbox',
  canLoad: [AuthGuard],
  loadChildren: () => import('./inbox/inbox.module').then(module => module.InboxModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
