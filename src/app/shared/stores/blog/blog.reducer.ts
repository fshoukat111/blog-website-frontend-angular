import { createReducer, on, Action } from '@ngrx/store';
import * as blogAction from '@app/shared/stores/blog/blog.actions';
import { IBlogState, initialBlogState } from '@app/shared/stores/blog/blog.state';
import { HelperService } from '@app/core/services/helper/helper.service';

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
  on(blogAction.LoadArticleLists, (state) => ({
    ...state,
  })),

  on(blogAction.LoadArticleListsSuccess, (state, { postList }) => ({
    ...state,
    postList,
  })),

  on(blogAction.LoadArticleListsFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Get Post Detail reducers
  on(blogAction.LoadArticleDetail, (state) => ({
    ...state,
  })),

  on(blogAction.LoadArticleDetailSuccess, (state, { articleDetail }) => ({
    ...state,
    articleDetail,
  })),

  on(blogAction.LoadArticleDetailFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Add Comments Process reducers
  on(blogAction.LoadPostArticleComment, (state, { comments }) => ({
    ...state,
    comments
  })),

  on(blogAction.LoadPostArticleCommentSuccess, (state, { comment }) => ({
    ...state,
    commentsList: HelperService.updateStore([...state.commentsList], comment)
  })),

  on(blogAction.LoadPostArticleCommentFail, (state, { error }) => ({
    ...state,
    error,
  })),

  //Get Comments Lists reducers
  on(blogAction.LoadGetArticleCommentLists, (state) => ({
    ...state,
  })),

  on(blogAction.LoadGetArticleCommentListsSuccess, (state, { commentsList }) => ({
    ...state,
    commentsList,
  })),

  on(blogAction.LoadGetArticleCommentListsFail, (state, { error }) => ({
    ...state,
    error,
  })),
);

export function blogReducer(state: IBlogState = initialBlogState, action: Action) {
  return createBlogReducer(state, action);
}
