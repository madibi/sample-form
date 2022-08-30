import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './../__/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompleteInfoComponent } from '../complete-info/complete-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RequestCodeComponent } from '@auth/request-code/request-code.component';
import { VerifyCodeComponent } from '@auth/verify-code/verify-code.component';
import { RegisterComponent } from '@auth/register/register.component';
import { MatDividerModule } from '@angular/material/divider';
import { LinkModule } from '@commons/components/link/link.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    CompleteInfoComponent,
    RequestCodeComponent,
    VerifyCodeComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    LinkModule
  ]
})
export class AuthModule { }
