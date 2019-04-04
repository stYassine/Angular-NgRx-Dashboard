import { Action } from '@ngrx/store';
import { Comment } from '../../models/comment';

export enum CommentsActionTypes {
  CommentsLoading = '[Comments] Comments Loading',
  LoadComments = '[Comments] Load Comments',
  CreateComment = '[Comments] Create Comment',
  UpdateComment = '[Comments] Update Comment',
  SelectComment = '[Comments] Select Comment',
  RemoveComment = '[Comments] Remove Comment'
}

export class CommentsLoading implements Action {
  readonly type = CommentsActionTypes.CommentsLoading;
  constructor(){}
}
export class LoadComments implements Action {
  readonly type = CommentsActionTypes.LoadComments;
  constructor(public payload: Comment[]){}
}
export class CreateComment implements Action {
  readonly type = CommentsActionTypes.CreateComment;
  constructor(public payload: Comment){}
}
export class SelectComment implements Action {
  readonly type = CommentsActionTypes.SelectComment;
  constructor(public payload: Comment){}
}
export class UpdateComment implements Action {
  readonly type = CommentsActionTypes.UpdateComment;
  constructor(public payload: Comment){}
}
export class RemoveComment implements Action {
  readonly type = CommentsActionTypes.RemoveComment;
  constructor(public payload: Comment){}
}


export type CommentsActions = CommentsLoading | LoadComments | CreateComment
| SelectComment | UpdateComment | RemoveComment;
