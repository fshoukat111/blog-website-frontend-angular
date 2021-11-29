import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBlogState } from "@app/shared/stores/blog/blog.state";

export const blogFeatureSelector = createFeatureSelector<IBlogState>('blog');
export const getLoaderStateSelector = createSelector(blogFeatureSelector, (state) => state.isLoading);
export const getPostsListSelector = createSelector(blogFeatureSelector, (state) => state.postList);
export const getPostDetailSelector = createSelector(blogFeatureSelector, (state) => state.postDetail);
export const getCategoryListSelector = createSelector(blogFeatureSelector, (state) => state.categoryList);
export const getCommentsListSelector = createSelector(blogFeatureSelector, (state) => state.commentsList);


