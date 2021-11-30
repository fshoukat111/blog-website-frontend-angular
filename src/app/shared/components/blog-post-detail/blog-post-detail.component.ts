import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BlogComments, BlogPost, Categories } from '@app/shared/models';
import { LoadAddCommentProcess, LoadGetCommentLists, LoadPostDetail } from '@app/shared/stores/blog/blog.actions';
import { getCommentsListSelector, getPostDetailSelector } from '@app/shared/stores/blog/blog.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.sass']
})
export class BlogPostDetailComponent implements OnInit, OnDestroy {

  postDetail: BlogPost;
  postSlug: string;
  categorySlug: string;
  commentsList: BlogComments[] = [];
  subscriptions$: Subscription[] = [];


  constructor(
    private route: ActivatedRoute,
    private blogStore: Store,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categorySlug = params.get('category_slug');
      this.postSlug = params.get('post_slug');
    });

    this.loadPostDetail();
    this.getPostDetail();

    this.loadGetCommentsOfPost();
    this.getCommentsListOfPost();
  }

  /**
   * Dispatch Post Detail Request
  */
  loadPostDetail() {
    this.blogStore.dispatch(LoadPostDetail(
      {
        category_slug: this.categorySlug,
        post_slug: this.postSlug,
      }
    ));
  }

  /**
   * Get Post Detail Data from request
  */
  getPostDetail() {
    this.subscriptions$.push(this.blogStore.pipe(select(getPostDetailSelector)).subscribe((postDetail: BlogPost) => {
      this.postDetail = postDetail;
    }));
  }

  /**
   * dispatch Comments of Posts
  */
  loadAddCommentsOfPost(comment: BlogComments) {
    this.blogStore.dispatch(LoadAddCommentProcess({ post_slug: this.postSlug, comments: comment }));
    this.loadGetCommentsOfPost();
    this.getCommentsListOfPost();
  }

  /**
   * Get Comments of Posts
  */
  loadGetCommentsOfPost() {
    this.blogStore.dispatch(LoadGetCommentLists({ post_slug: this.postSlug }));
  }

  /**
  * Get Comment List of Post from request
  */
  getCommentsListOfPost() {
    this.subscriptions$.push(this.blogStore.pipe(select(getCommentsListSelector)).subscribe((commentsList: BlogComments[]) => {
      if (commentsList && commentsList.length) {
        this.commentsList = commentsList;
      }
    }));
  }

  /**
   * Destroy Subscriptions
  */
  ngOnDestroy() {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
        console.log('subscribe',subscribe)
      }
    });
  }
}
