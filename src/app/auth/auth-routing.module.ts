import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'prefix' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'forget-pass', loadChildren: './forget-password/forget-password.module#ForgetPasswordModule' },
      { path: 'change-pass', loadChildren: './change-password/change-password.module#ChangePasswordModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
