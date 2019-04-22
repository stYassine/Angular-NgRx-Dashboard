import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/// NgRx
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../store/reducers/auth.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';

/// Services
import { AuthService } from '../services/auth.service';

/// Components
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { AuthContainerComponent } from '../components/auth/auth-container/auth-container.component';

const routes: Routes =[
  { path: 'auth', component: AuthContainerComponent },
  // { path: 'auth/register', component: RegisterComponent },
  { path: '**', component: AuthContainerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService
  ],
  declarations: [LoginComponent, RegisterComponent, AuthContainerComponent],
  exports: [
    LoginComponent, 
    RegisterComponent,
    RouterModule
  ],
})
export class AuthModule { }
