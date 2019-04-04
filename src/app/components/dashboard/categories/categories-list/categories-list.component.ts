import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category';
/// NgRx
import { Store, select } from '@ngrx/store';
import { State } from '../../../../store/reducers';
/// RxJs
import { Observable } from 'rxjs';

/// Actions
import { select_categories, select_categories_loading } from '../../../../store/selectors/categories.selector';
import * as categoriesActions from '../../../../store/actions/categories.actions';

import { RestApiService } from '../../../../services/rest-api.service';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  $categories: Observable<Category[]>;
  categories_loading: boolean =false;

  constructor(
    public store: Store<State>,
    public rest_api_service: RestApiService
  ) { }

  ngOnInit() {

    this.$categories =this.store.pipe(
      select(select_categories)
    );

    // this.categories_loading =this.store.pipe(
    //   select(select_categories_loading)
    // );
    
    this.store.dispatch(new categoriesActions.CategoriesLoading());

  }


  select_category(category: Category){
    this.store.dispatch(new categoriesActions.SelectCategory(category));
  }


}