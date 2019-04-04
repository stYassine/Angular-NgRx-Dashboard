import { createSelector } from '@ngrx/store';
import { State } from '../reducers';


export const select_posts_state =(state: State) => state.posts;

export const select_posts_loading =createSelector(
    select_posts_state,
    state => state.loading
);

export const select_posts =createSelector(
    select_posts_state,
    state => state.posts
);

export const select_selected_category =createSelector(
    select_posts_state,
    state => state.selected_post
);