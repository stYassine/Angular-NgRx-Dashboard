import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

/// NgRx
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../store/reducers/auth.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';


/// Components
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';



const routes: Routes =[
  { path: 'auth', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [
    LoginComponent, 
    RegisterComponent,
    RouterModule
  ],
})
export class AuthModule { }
