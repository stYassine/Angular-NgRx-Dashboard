import { Action } from '@ngrx/store';
import { UsersActionTypes, UsersActions } from '../actions/users.actions';
import { User } from '../../models/user';

export interface State {
  loading: Boolean;
  users: User[];
  selected_user: User
}

export const initialState: State = {
  loading: false,
  users: [],
  selected_user: null
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {

    case UsersActionTypes.UsersLoading:
      return {
        ...state,
        loading: true
      };

    case UsersActionTypes.LoadUsers:
      return {
        ...state,
        users: action.payload
      };

    case UsersActionTypes.SelectUser:
      return {
        ...state,
        selected_user: action.payload
      };

    case UsersActionTypes.CreateUser:
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case UsersActionTypes.UpdateUser:
      return {
        ...state,
        users: state.users.map((user) => user._id === action.payload._id ? user = action.payload : null )
      }

    case UsersActionTypes.RemoveUser:
      return {
        ...state,
        users: state.users.filter((user) => user._id != action.payload._id ) 
      }

    default:
      return state;
  }
}
