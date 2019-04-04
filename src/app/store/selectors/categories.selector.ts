import { createSelector } from '@ngrx/store';
import { State } from '../reducers';


export const select_categories_state =(state: State) => state.categories;

export const select_categories_loading =createSelector(
    select_categories_state,
    state => state.loading
);

export const select_categories =createSelector(
    select_categories_state,
    state => state.categories
);

export const select_selected_category =createSelector(
    select_categories_state,
    state => state.selected_category
);