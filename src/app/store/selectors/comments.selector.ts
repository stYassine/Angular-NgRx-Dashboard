import { createSelector } from '@ngrx/store';
import { State } from '../reducers';


export const select_comments_state =(state: State) => state.comments;

export const select_comments_loading =createSelector(
    select_comments_state,
    state => state.loading
);

export const select_comments =createSelector(
    select_comments_state,
    state => state.comments
);

export const select_selected_category =createSelector(
    select_comments_state,
    state => state.selected_comment
);