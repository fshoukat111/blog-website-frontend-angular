import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadArticleLists } from '@app/shared/stores/blog/blog.actions';
import { getArticleListSelector } from '@app/shared/stores/blog/blog.selectors';
import { IBlogState } from '@app/shared/stores/blog/blog.state';
@Component({
  selector: 'app-blog-article-list-by-category',
  templateUrl: './blog-article-list-by-category.component.html',
  styleUrls: ['./blog-article-list-by-category.component.sass']
})
export class BlogArticleListByCategoryComponent implements OnInit {

  @Input() hasPagination = true

  pageIndex: number = 1;
  postListByCategory: any[] = [];
  selectedCategory: string;
  subscriptions$: Subscription[] = [];
  config: { itemsPerPage: any; currentPage: number; totalItems: any; };


  constructor(
    private router: Router,
    private blogStore: Store<IBlogState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscriptions$.push(this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category_slug');
      this.dispatchPostByCategoriesList(this.selectedCategory, this.pageIndex);
    }));
    this.getPostListsByCategory();
  }

  /**
  * dispach Posts Lists By Categories
  */
  dispatchPostByCategoriesList(category_slug: string, pageNumber: number) {
    this.blogStore.dispatch(LoadArticleLists({ category_slug: category_slug, pageNumber: this.pageIndex }));
    this.postListByCategory = [];

  }

  /**
  * Get Posts List  By Categories
  */
  getPostListsByCategory() {
    this.subscriptions$.push(this.blogStore.pipe(select(getArticleListSelector)).subscribe((postListByCategory: any) => {
      if (postListByCategory.results && postListByCategory.results.length) {

        this.postListByCategory = postListByCategory.results;
      }
      this.config = {
        itemsPerPage: 3,
        currentPage: this.pageIndex,
        totalItems: postListByCategory.count,
      }
    }));
    this.postListByCategory = [];
  }
  /**
   * Redirect To Post Detail Page
   */
  redictToDetail(postDetail: any) {
    this.router.navigate(['/', this.selectedCategory, postDetail.slug])
  }

  /**
   * pagination function
   * @param event 
   */
  pageChange(event) {
    this.config.currentPage = event
    this.pageIndex = this.config.currentPage
    this.dispatchPostByCategoriesList(this.selectedCategory, this.pageIndex);
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
