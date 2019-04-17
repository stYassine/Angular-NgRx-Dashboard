import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Category } from '../models/category';
import { Post } from '../models/post';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { Like } from '../models/like';


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
  /// Posts
  /////////////////////////////////////////
  get_all_posts(): Observable<Post[]>{
    
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`).pipe(
      map((data: Post[]) => data),
      catchError(err => this.handleError(err))
    );

  }

  create_post(post: Post): Observable<Post>{
    return this.http.post<Post>(`${this.BASE_URL}/posts`, post).pipe(
      catchError(err => this.handleError(err))
    );
  }

  update_post(post: Post): Observable<Post>{
    return this.http.patch<Post>(`${this.BASE_URL}/posts/${post.id}`, post).pipe(
      catchError(err => this.handleError(err))
    );
  }

  delete_post(post: Post): Observable<Post>{
    return this.http.delete<Post>(`${this.BASE_URL}/posts/${post.id}`).pipe(
      catchError(err => this.handleError(err))
    );
  }


  /////////////////////////////////////////
  /// Comments
  /////////////////////////////////////////
  get_all_comments(): Observable<Comment[]>{
    
    return this.http.get<Comment[]>(`${this.BASE_URL}/posts`).pipe(
      map((data: Comment[]) => data),
      catchError(err => this.handleError(err))
    );

  }

  create_comment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(`${this.BASE_URL}/posts`, comment).pipe(
      catchError(err => this.handleError(err))
    );
  }

  update_comment(comment: Comment): Observable<Comment>{
    return this.http.patch<Comment>(`${this.BASE_URL}/posts/${comment.id}`, comment).pipe(
      catchError(err => this.handleError(err))
    );
  }

  delete_comment(comment: Comment): Observable<Comment>{
    return this.http.delete<Comment>(`${this.BASE_URL}/posts/${comment.id}`).pipe(
      catchError(err => this.handleError(err))
    );
  }


  /////////////////////////////////////////
  /// Users
  /////////////////////////////////////////
  get_all_users(): Observable<User[]>{
    
    return this.http.get<User[]>(`${this.BASE_URL}/users`).pipe(
      map((data: User[]) => data),
      catchError(err => this.handleError(err))
    );

  }

  create_user(user: User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/users`, user).pipe(
      catchError(err => this.handleError(err))
    );
  }

  update_user(user: User): Observable<User>{
    return this.http.patch<User>(`${this.BASE_URL}/users/${user.id}`, user).pipe(
      catchError(err => this.handleError(err))
    );
  }

  delete_user(user: User): Observable<User>{
    return this.http.delete<User>(`${this.BASE_URL}/users/${user.id}`).pipe(
      catchError(err => this.handleError(err))
    );
  }


  /////////////////////////////////////////
  /// Likes
  /////////////////////////////////////////
  get_all_likes(): Observable<Like[]>{
    
    return this.http.get<Like[]>(`${this.BASE_URL}/users`).pipe(
      map((data: Like[]) => data),
      catchError(err => this.handleError(err))
    );

  }

  create_like(like: Like): Observable<Like>{
    return this.http.post<Like>(`${this.BASE_URL}/likes`, like).pipe(
      catchError(err => this.handleError(err))
    );
  }

  update_like(like: Like): Observable<Like>{
    return this.http.patch<Like>(`${this.BASE_URL}/likes/${like.id}`, like).pipe(
      catchError(err => this.handleError(err))
    );
  }

  delete_like(like: Like): Observable<Like>{
    return this.http.delete<Like>(`${this.BASE_URL}/likes/${like.id}`).pipe(
      catchError(err => this.handleError(err))
    );
  }


}
