import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category';

import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { State } from '../../../../store/reducers';

import { select_selected_category } from '../../../../store/selectors/categories.selector';
import { SelectCategory, UpdateCategory } from '../../../../store/actions/categories.actions';


@Component({
  selector: 'update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  $category: Category;
  category_id ="";

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.category_id =this.route.snapshot.params.id;

    // this.$category =this.store.pipe(
    //   select(select_selected_category)
    // );

    this.store.dispatch(new SelectCategory(this.category_id));

  }


  update_category(){
    this.store.dispatch(new UpdateCategory(this.$category));
  }

}
