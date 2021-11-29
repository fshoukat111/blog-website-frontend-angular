import { createReducer, on, Action } from '@ngrx/store';
import * as blogAction from '@app/shared/stores/blog/blog.actions';
import { IBlogState, initialBlogState } from '@app/shared/stores/blog/blog.state';

const createBlogReducer = createReducer(initialBlogState,

  //Get Post Lists reducers
  on(blogAction.changeLoaderState, (state, { isLoading }) => ({
    ...state,
    isLoading
  })),

  //Get Category Lists reducers
  on(blogAction.LoadCategoryLists, (state) => ({
    ...state,
  })),

  on(blogAction.LoadCategoryListsSuccess, (state, { categoryList }) => ({
    ...state,
    categoryList,
  })),

  on(blogAction.LoadCategoryListsFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Get Post Lists reducers
  on(blogAction.LoadPostLists, (state) => ({
    ...state,
  })),

  on(blogAction.LoadPostListsSuccess, (state, { postList }) => ({
    ...state,
    postList,
  })),

  on(blogAction.LoadPostListsFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Get Post Detail reducers
  on(blogAction.LoadPostDetail, (state) => ({
    ...state,
  })),

  on(blogAction.LoadPostDetailSuccess, (state, { postDetail }) => ({
    ...state,
    postDetail,
  })),

  on(blogAction.LoadPostDetailFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Add Comments Process reducers
  on(blogAction.LoadAddCommentProcess, (state, { comments }) => ({
    ...state,
    comments
  })),

  on(blogAction.LoadAddCommentProcessSuccess, (state, { comments }) => ({
    ...state,
    comments,
  })),

  on(blogAction.LoadAddCommentProcessFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Get Comments Lists reducers
  on(blogAction.LoadGetCommentLists, (state) => ({
    ...state,
  })),

  on(blogAction.LoadGetCommentListsSuccess, (state, { commentsList }) => ({
    ...state,
    commentsList,
  })),

  on(blogAction.LoadGetCommentListsFail, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function blogReducer(state: IBlogState = initialBlogState, action: Action) {
  return createBlogReducer(state, action);
}
