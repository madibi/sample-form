import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteInfoComponent } from '../complete-info/complete-info.component';
import { LoginComponent } from '../login/login.component';
import { AuthComponent } from './../__/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },      
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'complete-info',
        component: CompleteInfoComponent
      }      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }