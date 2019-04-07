import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/auth.service';

import { AuthActionTypes, RegisterUser, LoginUser } from '../actions/auth.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private auth_service: AuthService
  ) {}


  @Effect() register_user =this.actions$.pipe(
    ofType<RegisterUser>(AuthActionTypes.AttemptRegister),
    mergeMap((action) => {
      return this.auth_service.register_user(action.payload).pipe(
        map(response => new RegisterUser(response.user)),
        catchError(err => this.handleError(err))
      )
    })
  );

  @Effect() login_user =this.actions$.pipe(
    ofType<LoginUser>(AuthActionTypes.LoginUser),
    mergeMap((action) => {
      return this.auth_service.login_user(action.payload).pipe(
        map(response => {}),
        catchError(err => this.handleError(err))
      )
    })
  );


  handleError(err: HttpErrorResponse): Observable<any>{
    let err_msg =`${err.statusText} - ${err.message}`;

    return throwError(err_msg);
  }



}
