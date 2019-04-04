import { Component, OnInit } from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { State } from '../../../../store/reducers/categories.reducer';
import { CreateCategory } from '../../../../store/actions/categories.actions';


@Component({
  selector: 'create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category_name: String ='';

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  create_new_category(){
    this.store.dispatch(new CreateCategory(this.category_name));
  }

}
