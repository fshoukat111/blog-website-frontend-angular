import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppRoutes } from '@app/shared/constants';
import { BlogPost, Categories } from '@app/shared/models';
import { LoadCategoryLists } from '@app/shared/stores/blog/blog.actions';
import { getCategoryListSelector } from '@app/shared/stores/blog/blog.selectors';
import { IBlogState } from '@app/shared/stores/blog/blog.state';

@Component({
  selector: 'app-article-blog-categories-list',
  templateUrl: './blog-article-categories-list.component.html',
  styleUrls: ['./blog-article-categories-list.component.sass']
})
export class BlogArticleCategoriesListComponent implements OnInit {

  categoriesList: Categories[] = [];
  subscriptions$: Subscription[] = [];

  constructor(
    private router: Router,
    private blogStore: Store<IBlogState>,
  ) { }

  ngOnInit(): void {
    this.dispatchCategoriesList();
  }

  /**
   * dispach Categories Lists
   */
  dispatchCategoriesList() {
    this.blogStore.dispatch(LoadCategoryLists());
    this.getCategoriesList();

  }

  /**
   * get Category Lists
   */
  getCategoriesList() {
    this.blogStore.pipe(select(getCategoryListSelector)).subscribe((categoriesList: Categories[]) => {
      if (categoriesList && categoriesList.length && categoriesList) {
        this.categoriesList = categoriesList.sort((a, b) => a.id - b.id);
      }
    });
  }

  /**
  * redirect Category List Post
  * @param category
  */
  redirectToCategories(category: Categories) {
    this.router.navigate(['/', category.slug]);
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
