import { Action } from '@ngrx/store';
import { PostsActionTypes, PostsActions } from '../actions/posts.actions';
import { Post } from '../../models/post';


export interface State {
  loading: Boolean;
  posts: Post[];
  selected_post: Post
}

export const initialState: State = {
  loading: false,
  posts: [],
  selected_post: null
};

export function reducer(state = initialState, action: PostsActions): State {
  switch (action.type) {

    case PostsActionTypes.PostsLoading:
      return {
        ...state,
        loading: true
      };

    case PostsActionTypes.LoadPosts:
      return {
        ...state,
        posts: action.payload
      };

    case PostsActionTypes.SelectPost:
      return {
        ...state,
        selected_post: action.payload
      };

    case PostsActionTypes.CreatePost:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case PostsActionTypes.UpdatePost:
      return {
        ...state,
        posts: state.posts.map((post) => post._id === action.payload._id ? post = action.payload : null )
      }

    case PostsActionTypes.RemovePost:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id != action.payload._id ) 
      }

    default:
      return state;
  }
}
