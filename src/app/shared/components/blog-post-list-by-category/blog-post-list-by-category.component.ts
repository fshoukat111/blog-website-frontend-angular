import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BlogPost, Categories } from '@app/shared/models';
import { LoadPostLists } from '@app/shared/stores/blog/blog.actions';
import { getPostsListSelector } from '@app/shared/stores/blog/blog.selectors';
import { IBlogState } from '@app/shared/stores/blog/blog.state';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-blog-post-list-by-category',
  templateUrl: './blog-post-list-by-category.component.html',
  styleUrls: ['./blog-post-list-by-category.component.sass']
})
export class BlogPostListByCategoryComponent implements OnInit, OnDestroy {

  @Input() hasPagination = true

  postListByCategory: BlogPost[] = [];
  subscriptions$: Subscription[] = [];
  selectedCategory: string;
  pageIndex: number = 1;


  constructor(
    private blogStore: Store<IBlogState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category_slug');
      this.dispatchPostByCategoriesList(this.selectedCategory, this.pageIndex);

    });
    this.getPostListsByCategory();

  }

  /**
  * dispach Posts Lists By Categories
  */
  dispatchPostByCategoriesList(category_slug: string, page_num: number) {
    this.blogStore.dispatch(LoadPostLists({ category_slug: category_slug, page_num: page_num }))
  }

  /**
   * Get Posts List  By Categories
  */
  getPostListsByCategory() {
    this.subscriptions$.push(this.blogStore.pipe(select(getPostsListSelector)).subscribe((postListByCategory: BlogPost[]) => {
      if (postListByCategory && postListByCategory.length) {
        this.postListByCategory = postListByCategory.sort((a, b) => b.id - b.id);
      }
    }));
  }

  /**
   * drag n drop posts list
   * @param event
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.postListByCategory, event.previousIndex, event.currentIndex);
  }

  redictToDetail(postDetail: BlogPost) {
    this.router.navigate(['/detail', this.selectedCategory, postDetail.slug])
  }

  /**
   * pagination
   * @param event
   */
  pageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.dispatchPostByCategoriesList(this.selectedCategory, this.pageIndex + 1);
  }

  /**
   * Destroy Services
  */
  ngOnDestroy() {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
      }
    });
  }
}
