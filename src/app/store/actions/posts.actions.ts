import { Action } from '@ngrx/store';
import { Post } from '../../models/post';

export enum PostsActionTypes {
  PostsLoading = '[Posts] Posts Loading',
  LoadPosts = '[Posts] Load Posts',
  CreatePost = '[Posts] Create Post',
  UpdatePost = '[Posts] Update Post',
  SelectPost = '[Posts] Select Post',
  RemovePost = '[Posts] Remove Post'

}

export class PostsLoading implements Action {
  readonly type = PostsActionTypes.PostsLoading;
  constructor(){}
}
export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
  constructor(public payload: Post[]){}
}
export class CreatePost implements Action {
  readonly type = PostsActionTypes.CreatePost;
  constructor(public payload: Post){}
}
export class SelectPost implements Action {
  readonly type = PostsActionTypes.SelectPost;
  constructor(public payload: Post){}
}
export class UpdatePost implements Action {
  readonly type = PostsActionTypes.UpdatePost;
  constructor(public payload: Post){}
}
export class RemovePost implements Action {
  readonly type = PostsActionTypes.RemovePost;
  constructor(public payload: Post){}
}


export type PostsActions = PostsLoading | LoadPosts | CreatePost 
| SelectPost | UpdatePost | RemovePost;
