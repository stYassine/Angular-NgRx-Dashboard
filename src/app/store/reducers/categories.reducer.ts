import { Action } from '@ngrx/store';
import { CategoriesActionTypes,CategoriesActions, CategoriesLoading } from '../actions/categories.actions';
import { Category } from '../../models/category';


export interface State {
  loading: Boolean;
  categories: Category[];
  selected_category: Category
}

const initial_categories: Category[] =[
];

export const initialState: State = {
  loading: false,
  categories: [],
  selected_category: {id: '', name: ''}
};

const select_category_by_id =(state, cat_id) => {
  state.categories.filter((elem) => {
    elem.id == cat_id;
  });
}

export function reducer(state = initialState, action: CategoriesActions): State {
  switch (action.type) {

    case CategoriesActionTypes.CategoriesLoading:
      return {
        ...state,
        loading: true
      };

    case CategoriesActionTypes.LoadCategories:
      return {
        ...state,
        categories: action.payload
      };

    case CategoriesActionTypes.SelectCategory:
      return {
        ...state,
        selected_category: {}
      };

    case CategoriesActionTypes.AddCategory:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };

    case CategoriesActionTypes.UpdateCategory:
      return {
        ...state,
        categories: state.categories.map((category) => category.id === action.payload.id ? category = action.payload : null )
      }

    case CategoriesActionTypes.RemoveCategory:
      return {
        ...state,
        categories: state.categories.filter((category) => category.id != action.payload.id ) 
      }

    default:
      return state;
  }
}
