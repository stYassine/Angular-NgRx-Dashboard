import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public BASE_URL ="http://127.0.0.1:8000/api";
  
  register_user(user_data): Observable<any>{
    return this.http.post(`${this.BASE_URL}/register`, user_data);
  }

  login_user(user_data): Observable<User>{
    return this.http.post(`${this.BASE_URL}/register`, user_data);
  }

  handleError(err: HttpErrorResponse): Observable<any>{
    let err_msg =`${err.statusText} - ${err.message}`;

    return throwError(err_msg);
  }
  

}
