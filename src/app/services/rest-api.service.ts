import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  public BASE_URL ="http://127.0.0.1:8000/api";
  public headers ="";


  /////////////////////////////////////////
  /// Categories
  /////////////////////////////////////////
  get_all_categories(): Observable<Category[]>{
    
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`).pipe(
      map((data: Category[]) => data),
      catchError(err => this.handleError(err))
    );

  }

  create_category(category: String): Observable<Category>{
    return this.http.post<Category>(`${this.BASE_URL}/categories`, category).pipe(
      catchError(err => this.handleError(err))
    );
  }

  update_category(category: Category): Observable<Category>{
    return this.http.patch<Category>(`${this.BASE_URL}/categories/${category.id}`, category).pipe(
      catchError(err => this.handleError(err))
    );
  }

  delete_category(category: Category): Observable<Category>{
    return this.http.delete<Category>(`${this.BASE_URL}/categories/${category.id}`).pipe(
      catchError(err => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any>{
    let err_msg =`${error.message} - ${error.statusText}`;
    return throwError(err_msg);
  }



  /////////////////////////////////////////
  /// Categories
  /////////////////////////////////////////


}
