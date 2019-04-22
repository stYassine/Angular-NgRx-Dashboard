import { Action } from '@ngrx/store';
import { CommentsActionTypes, CommentsActions } from '../actions/comments.actions';
import { Comment } from '../../models/comment';

export interface State {
  loading: Boolean;
  comments: Comment[];
  selected_comment: Comment
}

export const initialState: State = {
  loading: false,
  comments: [],
  selected_comment: null
};

export function reducer(state = initialState, action: CommentsActions): State {
  switch (action.type) {

    case CommentsActionTypes.CommentsLoading:
      return {
        ...state,
        loading: true
      };

    case CommentsActionTypes.LoadComments:
      return {
        ...state,
        comments: action.payload
      };

    case CommentsActionTypes.SelectComment:
      return {
        ...state,
        selected_comment: action.payload
      };

    case CommentsActionTypes.CreateComment:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };

    case CommentsActionTypes.UpdateComment:
      return {
        ...state,
        comments: state.comments.map((comment) => comment.id === action.payload.id ? comment = action.payload : null )
      }

    case CommentsActionTypes.RemoveComment:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id != action.payload.id ) 
      }

    default:
      return state;
  }
}
