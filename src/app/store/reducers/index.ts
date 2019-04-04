import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromAuth from './auth.reducer';
import * as fromCategories from './categories.reducer';
import * as fromPosts from './posts.reducer';
import * as fromUsers from './users.reducer';
import * as fromComments from './comments.reducer';


export interface State {
  auth: fromAuth.State;
  categories: fromCategories.State;
  posts: fromPosts.State;
  users: fromUsers.State;
  comments: fromComments.State
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  categories: fromCategories.reducer,
  posts: fromPosts.reducer,
  users: fromUsers.reducer,
  comments: fromComments.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
