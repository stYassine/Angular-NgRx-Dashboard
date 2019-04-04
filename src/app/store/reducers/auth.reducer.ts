import { Action } from '@ngrx/store';
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface State {
  is_auth: Boolean,
  profile: {},
}

export const initialState: State = {
  is_auth: false,
  profile: {}
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.RegisterUser:
      return {
        ...state
      };

    case AuthActionTypes.LoginUser:
      return {
        ...state,
        is_auth: true,
        profile: action.payload
      }

    case AuthActionTypes.LogoutUser:
      return {
        ...state,
        is_auth: false,
        profile: {}
      }

    default:
      return state;
  }
}
