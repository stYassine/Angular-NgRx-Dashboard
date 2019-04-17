import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/// Core Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

/// NgRx
import { StoreModule } from '@ngrx/store';
import * as fromPosts from '../store/reducers/posts.reducer';
import * as fromCategories from '../store/reducers/categories.reducer';
import * as fromUsers from '../store/reducers/users.reducer';
import * as fromComments from '../store/reducers/comments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from '../store/effects/categories.effects';
import { PostsEffects } from '../store/effects/posts.effects';
import { UsersEffects } from '../store/effects/users.effects';
import { CommentsEffects } from '../store/effects/comments.effects';

/// Guards
import { AuthGuard } from '../guards/auth.guard';

/// Interceptors
import { TokenInterceptor } from '../interceptors/token-interceptor';

/// Services
import { CookieService } from 'ngx-cookie-service';
import { RestApiService } from '../services/rest-api.service';
import { TokenService } from '../services/token.service';

/// Components
import { MainDashboardComponent } from '../components/dashboard/main-dashboard/main-dashboard.component';
import { DashboardStatiticsComponent } from '../components/dashboard/dashboard-statitics/dashboard-statitics.component';
/// Partials
import { NavbarComponent } from '../components/dashboard/partials/navbar/navbar.component';
import { SidebarComponent } from '../components/dashboard/partials/sidebar/sidebar.component';
import { FooterComponent } from '../components/dashboard/partials/footer/footer.component';
/// Users
import { UsersListComponent } from '../components/dashboard/users/users-list/users-list.component';
import { CreateUserComponent } from '../components/dashboard/users/create-user/create-user.component';
import { UpdateUserComponent } from '../components/dashboard/users/update-user/update-user.component';
/// Categories
import { CategoriesListComponent } from '../components/dashboard/categories/categories-list/categories-list.component';
import { CreateCategoryComponent } from '../components/dashboard/categories/create-category/create-category.component';
import { UpdateCategoryComponent } from '../components/dashboard/categories/update-category/update-category.component';
/// Posts
import { UpdatePostComponent } from '../components/dashboard/posts/update-post/update-post.component';
import { CreatePostComponent } from '../components/dashboard/posts/create-post/create-post.component';
import { PostsListComponent } from '../components/dashboard/posts/posts-list/posts-list.component';
/// Comments
import { CommentsListComponent } from '../components/dashboard/comments/comments-list/comments-list.component';
import { CreateCommentComponent } from '../components/dashboard/comments/create-comment/create-comment.component';
import { UpdateCommentComponent } from '../components/dashboard/comments/update-comment/update-comment.component';



/// Routes
const routes: Routes =[
  { path: 'dashboard', component: MainDashboardComponent, canActivate: [ AuthGuard ],
  children: [
    { path: '', component: DashboardStatiticsComponent },
    { path: 'users', children: [
      { path: '', component: UsersListComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'update/:id', component: UpdateUserComponent },
    ] },
    { path: 'categories', children: [
      { path: '', component: CategoriesListComponent },
      { path: 'create', component: CreateCategoryComponent },
      { path: 'update/:id', component: UpdateCategoryComponent },
    ] },
    { path: 'posts', children: [
      { path: '', component: PostsListComponent },
      { path: 'create', component: CreatePostComponent },
      { path: 'update/:id', component: UpdatePostComponent },
    ] },
    { path: 'comments', children: [
      { path: '', component: CommentsListComponent },
      { path: 'create', component: CreateCommentComponent },
      { path: 'update/:id', component: UpdateCommentComponent }
    ] },
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', fromPosts.reducer),
    StoreModule.forFeature('categories', fromCategories.reducer),
    StoreModule.forFeature('users', fromUsers.reducer),
    StoreModule.forFeature('comments', fromComments.reducer),
    EffectsModule.forFeature([CategoriesEffects, PostsEffects, UsersEffects, CommentsEffects])
  ],
  providers: [
      CookieService,
      RestApiService,
      TokenService,
     { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  declarations: [
    MainDashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    UsersListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    CategoriesListComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    UpdatePostComponent,
    CreatePostComponent,
    PostsListComponent,
    DashboardStatiticsComponent,
    CommentsListComponent,
    CreateCommentComponent,
    UpdateCommentComponent
  ],
  exports: [
    MainDashboardComponent,
    FormsModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    UsersListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    CategoriesListComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    UpdatePostComponent,
    CreatePostComponent,
    PostsListComponent,
    DashboardStatiticsComponent,
    CommentsListComponent,
    CreateCommentComponent,
    UpdateCommentComponent,
    HttpClientModule,
    RouterModule
  ]
})
export class DashboardModule { }
