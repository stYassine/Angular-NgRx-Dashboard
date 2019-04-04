import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum AuthActionTypes {
  RegisterUser ='[Auth] Register User',
  LoginUser ='[Auth] Login User',
  LogoutUser ='[Auth] Logout User'
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.RegisterUser;
  constructor(public payload: User){}
}
export class LoginUser implements Action {
  readonly type = AuthActionTypes.LoginUser;
  constructor(public payload: User){}
}
export class LogoutUser implements Action {
  readonly type = AuthActionTypes.LogoutUser;
  constructor(){}
}


export type AuthActions = RegisterUser | LoginUser | LogoutUser;
