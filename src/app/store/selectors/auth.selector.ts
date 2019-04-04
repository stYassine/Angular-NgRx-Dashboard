import { createSelector } from '@ngrx/store';
import { State } from '../reducers';


export const select_auth_state =(state: State) => state.auth;

export const select_is_auth =createSelector(
    select_auth_state,
    auth => auth.is_auth  
);

export const select_profile =createSelector(
    select_auth_state,
    auth => auth.profile
);