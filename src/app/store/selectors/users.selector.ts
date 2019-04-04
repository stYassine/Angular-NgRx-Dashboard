import { createSelector } from '@ngrx/store';
import { State } from '../reducers';


export const select_users_state =(state: State) => state.users;

export const select_users_loading =createSelector(
    select_users_state,
    state => state.loading
);

export const select_users =createSelector(
    select_users_state,
    state => state.users
);

export const select_selected_category =createSelector(
    select_users_state,
    state => state.selected_user
);