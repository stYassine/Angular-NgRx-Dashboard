import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CategoriesActionTypes, LoadCategories, CreateCategory} from '../actions/categories.actions';

import { RestApiService } from '../../services/rest-api.service';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class CategoriesEffects {

  constructor(
    private actions$: Actions,
    private api_service: RestApiService
  ) {}

  @Effect() load_categories =this.actions$.pipe(
    ofType(CategoriesActionTypes.CategoriesLoading),
    mergeMap(() => {
      return this.api_service.get_all_categories().pipe(
        map(response => new LoadCategories(response.categories)),
        catchError(err => this.handleError(err))
      )
    })
  );

  @Effect() create_category =this.actions$.pipe(
    ofType<CreateCategory>(CategoriesActionTypes.CreateCategory),
    mergeMap((action) => {
      return this.api_service.create_category(action.payload).pipe(
        map(response => new CreateCategory(response.category)),
        catchError(err => this.handleError(err))
      )
    })
  );


  handleError(err: HttpErrorResponse): Observable<any>{
    let err_msg =`${err.status} - ${err.message}`;

    return throwError(err_msg);
  }
  

}
