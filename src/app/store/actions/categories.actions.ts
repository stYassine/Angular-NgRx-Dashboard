import { Action } from '@ngrx/store';
import { Category } from '../../models/category';

export enum CategoriesActionTypes {
  CategoriesLoading = '[Categories] Categories Loading',
  LoadCategories = '[Categories] Load Categories',
  CreateCategory = '[Categories] Create Category',
  AddCategory = '[Categories] Add Category',
  UpdateCategory = '[Categories] Update Category',
  SelectCategory = '[Categories] Select Category',
  RemoveCategory = '[Categories] Remove Category'
}

export class CategoriesLoading implements Action {
  readonly type = CategoriesActionTypes.CategoriesLoading;
  constructor(){}
}
export class LoadCategories implements Action {
  readonly type = CategoriesActionTypes.LoadCategories;
  constructor(public payload: Category[]){}
}
export class CreateCategory implements Action {
  readonly type = CategoriesActionTypes.CreateCategory;
  constructor(public payload: String){}
}
export class AddCategory implements Action {
  readonly type = CategoriesActionTypes.AddCategory;
  constructor(public payload: Category){}
}
export class SelectCategory implements Action {
  readonly type = CategoriesActionTypes.SelectCategory;
  constructor(public payload: String){}
}
export class UpdateCategory implements Action {
  readonly type = CategoriesActionTypes.UpdateCategory;
  constructor(public payload: Category){}
}
export class RemoveCategory implements Action {
  readonly type = CategoriesActionTypes.RemoveCategory;
  constructor(public payload: Category){}
}


export type CategoriesActions = CategoriesLoading | AddCategory | LoadCategories | CreateCategory 
| SelectCategory | UpdateCategory | RemoveCategory;
