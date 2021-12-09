import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BlogPost, Categories } from '@app/shared/models';
import { LoadArticleLists } from '@app/shared/stores/blog/blog.actions';
import { getArticleListSelector } from '@app/shared/stores/blog/blog.selectors';
import { IBlogState } from '@app/shared/stores/blog/blog.state';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-article-list-by-category',
  templateUrl: './blog-article-list-by-category.component.html',
  styleUrls: ['./blog-article-list-by-category.component.sass']
})
export class BlogArticleListByCategoryComponent implements OnInit {

  @Input() hasPagination = true

  pageIndex: number = 1;
  postListByCategory: BlogPost[] = [];
  selectedCategory: string;
  subscriptions$: Subscription[] = [];


  constructor(
    private router: Router,
    private blogStore: Store<IBlogState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscriptions$.push(this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category_slug');
      this.dispatchPostByCategoriesList(this.selectedCategory);
    }));
    this.getPostListsByCategory();
  }

  /**
  * dispach Posts Lists By Categories
  */
  dispatchPostByCategoriesList(category_slug: string) {
    this.blogStore.dispatch(LoadArticleLists({ category_slug: category_slug }));
    // this.blogStore.dispatch(LoadPostLists({ category_slug: category_slug, page_num: page_num }));
    this.postListByCategory = [];

  }

  /**
  * Get Posts List  By Categories
  */
  getPostListsByCategory() {
    this.subscriptions$.push(this.blogStore.pipe(select(getArticleListSelector)).subscribe((postListByCategory: BlogPost[]) => {
      if (postListByCategory && postListByCategory.length) {

        this.postListByCategory = postListByCategory;
        console.log('this.postListByCategory', this.postListByCategory)
      }
    }));
    this.postListByCategory = [];
  }

  redictToDetail(postDetail: BlogPost) {
    this.router.navigate(['/', this.selectedCategory, postDetail.slug])
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
