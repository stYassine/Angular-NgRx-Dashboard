import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UsersActionTypes {
  UsersLoading = '[Users] Users Loading',
  LoadUsers = '[Users] Load Users',
  CreateUser = '[Users] Create User',
  UpdateUser = '[Users] Update User',
  SelectUser = '[Users] Select User',
  RemoveUser = '[Users] Remove User'
}

export class UsersLoading implements Action {
  readonly type = UsersActionTypes.UsersLoading;
  constructor(){}
}
export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
  constructor(public payload: User[]){}
}
export class CreateUser implements Action {
  readonly type = UsersActionTypes.CreateUser;
  constructor(public payload: User){}
}
export class SelectUser implements Action {
  readonly type = UsersActionTypes.SelectUser;
  constructor(public payload: User){}
}
export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UpdateUser;
  constructor(public payload: User){}
}
export class RemoveUser implements Action {
  readonly type = UsersActionTypes.RemoveUser;
  constructor(public payload: User){}
}


export type UsersActions = UsersLoading | LoadUsers | CreateUser 
| SelectUser | UpdateUser | RemoveUser;
