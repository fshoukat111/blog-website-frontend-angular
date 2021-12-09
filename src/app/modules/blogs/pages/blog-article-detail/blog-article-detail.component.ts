import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BlogComments, BlogPost, Categories } from '@app/shared/models';
import {
  LoadArticleDetail,
  LoadPostArticleComment,
  LoadGetArticleCommentLists,
} from '@app/shared/stores/blog/blog.actions';
import { getCommentsListSelector, getArticleDetailSelector } from '@app/shared/stores/blog/blog.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-article-detail',
  templateUrl: './blog-article-detail.component.html',
  styleUrls: ['./blog-article-detail.component.sass']
})
export class BlogArticleDetailComponent implements OnInit, OnDestroy {

  articleDetail: BlogPost;
  articleSlug: string;
  categorySlug: string;
  commentsList: BlogComments[] = [];
  subscriptions$: Subscription[] = [];


  constructor(
    private route: ActivatedRoute,
    private blogStore: Store,
  ) { }

  ngOnInit(): void {

    this.subscriptions$.push(
      this.route.paramMap.subscribe(params => {
        this.categorySlug = params.get('category_slug');
        this.articleSlug = params.get('post_slug');
        this.loadPostDetail();
        this.loadGetArticleComment();

      }));

      this.getCommentsListArticle();





  }

  /**
   * Dispatch Post Detail Request
  */
  loadPostDetail() {
    this.blogStore.dispatch(LoadArticleDetail(
      {
        category_slug: this.categorySlug,
        article_slug: this.articleSlug,
      }
    ));
    this.articleDetail = {}
    this.getPostDetail();

  }

  /**
   * Get Post Detail Data from request
  */
  getPostDetail() {
    this.subscriptions$.push(this.blogStore.pipe(select(getArticleDetailSelector)).subscribe((articleDetail: BlogPost) => {
      if (articleDetail) {
        this.articleDetail = articleDetail;
        console.log("articleDetail", this.articleDetail)
      }


    }
    ));
  }

  /**
   * dispatch Article Comment of Article
  */
  dispatchArticleComment(comment: BlogComments) {
      this.blogStore.dispatch(LoadPostArticleComment({ article_slug: this.articleSlug, comments: comment }));
      // this.loadGetArticleComment();
      // this.getCommentsListArticle();


    }

  /**
   * Get Comments of Article
  */
  loadGetArticleComment() {
    this.blogStore.dispatch(LoadGetArticleCommentLists({ article_slug: this.articleSlug }));
  }

  /**
  * Get Comment List of Post from request
  */
  getCommentsListArticle() {
    this.subscriptions$.push(this.blogStore.pipe(select(getCommentsListSelector)).subscribe((commentsList: BlogComments[]) => {
      if (commentsList && commentsList.length) {
        this.commentsList = [];
        this.commentsList = commentsList;
        console.log('commentsList', commentsList)
      }
    }));
    // this.commentsList = [];

  }

  /**
   * Destroy Subscriptions
  */
  ngOnDestroy() {
    this.subscriptions$.forEach(subscribe => {
      if (subscribe) {
        subscribe.unsubscribe();
        console.log('subscribe', subscribe)
      }
    });
  }
}
