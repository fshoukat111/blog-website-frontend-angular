import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
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
   * Post Lists
   * Triggers when LoadPostLists action is dispatched
   * On success, dispatches LoadPostListsSuccess action
   * @todo Display loaders
  */
  getPostList$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadPostLists),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getPostsList(action.category_slug, action.page_num).pipe(map((res: BlogPost[]) => {
          this.loaderService.hideLoader();
          return blogAction.LoadPostListsSuccess({ postList: res });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadPostListsFail({ error }));
          })
        );
      })
    )
  );

  /**
   * Post Detail
   * Triggers when LoadPostDetail action is dispatched
   * On success, dispatches LoadPostDetailSuccess action
   * @todo Display loaders
  */
  getPostDetail$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadPostDetail),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getPostDetail(action.category_slug,action.post_slug).pipe(map((postDetail: BlogPost) => {
          this.loaderService.hideLoader();
          return blogAction.LoadPostDetailSuccess({ postDetail });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadPostDetailFail({ error }));
          })
        );
      })
    )
  );

  /**
   *Get Add Comments of post
   * Triggers when LoadAddCommentProcess action is dispatched
   * On success, dispatches LoadAddCommentProcessSuccess action
   * @todo Display loaders
  */
  getAddCommentProccess$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadAddCommentProcess),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.addCommentofPosts(action.post_slug,action.comments).pipe(map((comments: BlogComments) => {
          this.loaderService.hideLoader();
          return blogAction.LoadAddCommentProcessSuccess({ comments });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadAddCommentProcessFail({ error }));
          })
        );
      })
    )
  );

  /**
  * Get Comment Lists
  * Triggers when LoadGetCommentList action is dispatched
  * On success, dispatches LoadGetCommentListSuccess action
  * @todo Display loaders
  */
  getCommentList$ = createEffect(() =>
    this.actions$.pipe(ofType(blogAction.LoadGetCommentLists),
      switchMap((action) => {
        this.loaderService.showLoader();
        return this.blogService.getCommentofPosts(action.post_slug).pipe(map((res: BlogComments[]) => {
          this.loaderService.hideLoader();
          return blogAction.LoadGetCommentListsSuccess({ commentsList: res });
        }),
          catchError((error) => {
            this.loaderService.hideLoader();
            // this.messageService.add({
            //   severity: 'error',
            //   summary: 'Login Error',
            //   detail: 'Invalid email or password',
            // });
            return of(blogAction.LoadGetCommentListsFail({ error }));
          })
        );
      })
    )
  );
}
