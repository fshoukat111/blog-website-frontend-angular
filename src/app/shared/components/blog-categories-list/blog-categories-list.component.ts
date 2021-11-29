import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppRoutes } from '@app/shared/constants';
import { BlogPost, Categories } from '@app/shared/models';
import { LoadCategoryLists } from '@app/shared/stores/blog/blog.actions';
import { getCategoryListSelector } from '@app/shared/stores/blog/blog.selectors';

@Component({
  selector: 'app-blog-categories-list',
  templateUrl: './blog-categories-list.component.html',
  styleUrls: ['./blog-categories-list.component.sass']
})
export class BlogCategoriesListComponent implements OnInit, OnDestroy {

  categoriesList: Categories[] = [];
  postListByCategory: BlogPost[] = [];
  subscriptions$: Subscription[] = [];
  selectedCategory: string;

  constructor(
    private router: Router,
    private blogStore: Store,
  ) { }

  ngOnInit(): void {
    this.dispatchCategoriesList();
    this.getCategoriesList();
  }

  /**
   * dispach Categories Lists
   */
  dispatchCategoriesList() {
    this.blogStore.dispatch(LoadCategoryLists());
  }

  /**
   * get Category Lists
   */
  getCategoriesList() {
    this.subscriptions$.push(this.blogStore.pipe(select(getCategoryListSelector)).subscribe((categoriesList: Categories[]) => {
      if (categoriesList && categoriesList.length && categoriesList) {
        this.categoriesList = categoriesList.sort((a, b) => a.id - b.id)
      }
    }));
  }

  /**
   * redirect Category List Post
   * @param category
   */
  redirectToCategories(category: Categories) {
    this.router.navigate(['/', category.slug])
  }

  /**
   * Destroy Categories Services
  */
  ngOnDestroy() {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
