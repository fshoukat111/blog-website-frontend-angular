import { createAction, props } from '@ngrx/store';
import { BlogComments, BlogPost, Categories } from '@app/shared/models';

//Start Loader Section//
// Loader Action
export const changeLoaderState = createAction(
  '[Loader] Loader state change',
  props<{ isLoading: boolean }>()
);
//End Loader Section//

//Start Category Secion//
// Load Category List Action
export const LoadCategoryLists = createAction(
  '[LoadCategoryLists] LoadCategoryLists',
);

// Load Category List Action Successful
export const LoadCategoryListsSuccess = createAction(
  '[LoadCategoryLists] LoadCategoryListsSuccess',
  props<{ categoryList: Categories[] }>()
);

// Load Category List Action Failure
export const LoadCategoryListsFail = createAction(
  '[LoadCategoryLists] LoadCategoryListsFail',
  props<{ error: any }>()
);
// End Category Section//

//Start Article List Secion//
// Load Article List Action
export const LoadArticleLists = createAction(
  '[LoadArticleLists] LoadArticleLists',
  props<{ category_slug: string, pageNumber: number }>()
  // props<{ category_slug: string, page_num: number }>()

);

// Load Article List Action Successful
export const LoadArticleListsSuccess = createAction(
  '[LoadArticleListsSuccess] LoadArticleListsSuccess',
  props<{ postList: BlogPost[] }>()
);

// Load Article List Action Failure
export const LoadArticleListsFail = createAction(
  '[LoadArticleListsFail] LoadArticleListsFail',
  props<{ error: any }>()
);

// Load Article Detail Action
export const LoadArticleDetail = createAction(
  '[LoadArticleDetail] LoadArticleDetail',
  props<{ category_slug: string, article_slug: string }>()

);

// Load Post Detail Action Successful
export const LoadArticleDetailSuccess = createAction(
  '[LoadArticleDetailSuccess] LoadArticleDetailSuccess',
  props<{ articleDetail: any }>()
);

// Load Article Detail Action Failure
export const LoadArticleDetailFail = createAction(
  '[LoadArticleDetailFail] LoadArticleDetailFail',
  props<{ error: any }>()
);
//End Article List Secion//

//Start Comments on Posts Section Of Post//
// Load Post Article Comnents
export const LoadPostArticleComment = createAction(
  '[LoadPostArticleComment] LoadPostArticleComment',
  props<{ article_slug: string, comments: BlogComments }>()

);

// Load Post Article Comnents Successful
export const LoadPostArticleCommentSuccess = createAction(
  '[LoadAddCommetOfPost] LoadPostArticleCommentSuccess',
  props<{ comment: BlogComments }>()
);

// Load Post Article Comnents  Action Failure
export const LoadPostArticleCommentFail = createAction(
  '[LoadPostArticleComment] LoadPostArticleCommentFail',
  props<{ error: any }>()
);

// Load Get Comnents Action
export const LoadGetArticleCommentLists = createAction(
  '[LoadGetArticleCommentLists] LoadGetArticleCommentLists',
  props<{ article_slug: string }>()

);

// Load Get Comnents Action Successful
export const LoadGetArticleCommentListsSuccess = createAction(
  '[LoadGetArticleCommentLists] LoadGetArticleCommentListsSuccess',
  props<{ commentsList: BlogComments[] }>()
);

// Load Add Comnents  Action Failure
export const LoadGetArticleCommentListsFail = createAction(
  '[LoadGetArticleCommentLists] LoadGetArticleCommentListsFail',
  props<{ error: any }>()
);
//End Comments Section//
