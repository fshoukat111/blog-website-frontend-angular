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
  '[LoadCategoryLists] LoadCategoryListsSuccessfully',
  props<{ categoryList: Categories[] }>()
);

// Load Category List Action Failure
export const LoadCategoryListsFail = createAction(
  '[LoadCategoryLists] LoadCategoryListsFail',
  props<{ error: any }>()
);
// End Category Section//

//Start Posts List Secion//
// Load Post List Action
export const LoadPostLists = createAction(
  '[LoadPostLists] LoadPostLists',
  props<{ category_slug: string, page_num: number }>()

);

// Load Post List Action Successful
export const LoadPostListsSuccess = createAction(
  '[LoadPostLists] LoadPostListsSuccessfully',
  props<{ postList: BlogPost[] }>()
);

// Load Post List Action Failure
export const LoadPostListsFail = createAction(
  '[LoadPostLists] LoadPostListsFail',
  props<{ error: any }>()
);

// Load Post Detail Action
export const LoadPostDetail = createAction(
  '[LoadPostDetail] LoadPostDetail',
  props<{ category_slug: string, post_slug: string }>()

);

// Load Post Detail Action Successful
export const LoadPostDetailSuccess = createAction(
  '[LoadPostLists] LoadPostDetailSuccessfully',
  props<{ postDetail: BlogPost }>()
);

// Load Post Detail Action Failure
export const LoadPostDetailFail = createAction(
  '[LoadPostDetail] LoadPostDetailFail',
  props<{ error: any }>()
);
//End Posts List Secion//

//Start Comments on Posts Section Of Post//
// Load Add Comnents Action
export const LoadAddCommentProcess = createAction(
  '[LoadAddCommentProcess] LoadAddCommentProcess',
  props<{ post_slug: string, comments: BlogComments }>()

);

// Load Add Comnents Action Successful
export const LoadAddCommentProcessSuccess = createAction(
  '[LoadAddCommetOfPost] LoadAddCommetOfPostSuccessfully',
  props<{ comments: BlogComments }>()
);

// Load Add Comnents  Action Failure
export const LoadAddCommentProcessFail = createAction(
  '[LoadAddCommentProcess] LoadAddCommentProcessFail',
  props<{ error: any }>()
);

// Load Get Comnents Action
export const LoadGetCommentLists = createAction(
  '[LoadGetCommentList] LoadGetCommentList',
  props<{ post_slug : string }>()

);

// Load Get Comnents Action Successful
export const LoadGetCommentListsSuccess = createAction(
  '[LoadGetCommentList] LoadGetCommentListSuccessfully',
  props<{ commentsList: BlogComments[] }>()
);

// Load Add Comnents  Action Failure
export const LoadGetCommentListsFail = createAction(
  '[LoadGetCommentList] LoadGetCommentListFail',
  props<{ error: any }>()
);
//End Comments Section//
