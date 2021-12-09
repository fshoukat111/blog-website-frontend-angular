import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as blogAction from '@app/shared/stores/blog/blog.actions';
import { LoaderService } from '@app/core/services/loader.service';
import { BlogService } from '@app/core/services/blog/blog.service';
import { BlogComments, BlogPost, Categories } from '@app/shared/models';


@Injectable()
export class BlogEffects {
  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    private loaderService: LoaderService,
  ) { }

  /**
   * Category Lists
   * Triggers when LoadCategoryLists action is dispatched
   * On success, dispatches LoadPostCategorysSuccess action
   * @todo Display loaders
  */
  getCategoryList$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadCategoryLists),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getCategoriesList().pipe(map((res: Categories[]) => {
          this.loaderService.hideLoader();
          return blogAction.LoadCategoryListsSuccess({ categoryList: res });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadCategoryListsFail({ error }));
          })
        );
      })
    )
  );

  /**
   * Article Lists
   * Triggers when LoadArticleLists action is dispatched
   * On success, dispatches LoadPostListsSuccess action
   * @todo Display loaders
  */
  getArticlesList$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadArticleLists),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getArticlesList(action.category_slug).pipe(
          map((res: BlogPost[]) => {
            // return this.blogService.getPostsList(action.category_slug, action.page_num).pipe(map((res: BlogPost[]) => {
            this.loaderService.hideLoader();
            return blogAction.LoadArticleListsSuccess({ postList: res });
          }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadArticleListsFail({ error }));
          })
        );
      })
    )
  );

  /**
   * Article Detail
   * Triggers when LoadPostDetail action is dispatched
   * On success, dispatches LoadPostDetailSuccess action
   * @todo Display loaders
  */
  getArticleDetail$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadArticleDetail),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getArticleDetail(action.category_slug, action.article_slug).pipe(map((articleDetail: BlogPost) => {

          this.loaderService.hideLoader();
          return blogAction.LoadArticleDetailSuccess({ articleDetail });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadArticleDetailFail({ error }));
          })
        );
      })
    )
  );

  /**
   *Get Add Comments of post
   * Triggers when LoadPostArticleComment action is dispatched
   * On success, dispatches LoadPostArticleCommentSuccess action
   * @todo Display loaders
  */
  getpostArticleComments$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadPostArticleComment),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.postArticleComments(action.article_slug, action.comments).pipe(map((comment: BlogComments) => {
          this.loaderService.hideLoader();
          return blogAction.LoadPostArticleCommentSuccess({ comment });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadPostArticleCommentFail({ error }));
          })
        );
      })
    )
  );

  /**
  * Get Comment Lists
  * Triggers when LoadGetArticleCommentLists action is dispatched
  * On success, dispatches LoadGetArticleCommentListsSuccess action
  * @todo Display loaders
  */
  getArticleCommentList$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadGetArticleCommentLists),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getArticleComments(action.article_slug).pipe(map((res: BlogComments[]) => {
          this.loaderService.hideLoader();
          return blogAction.LoadGetArticleCommentListsSuccess({ commentsList: res });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadGetArticleCommentListsFail({ error }));
          })
        );
      })
    )
  );
}
