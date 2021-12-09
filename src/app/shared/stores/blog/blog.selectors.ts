import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBlogState } from "@app/shared/stores/blog/blog.state";

export const blogFeatureSelector = createFeatureSelector<IBlogState>('blog');
export const getLoaderStateSelector = createSelector(blogFeatureSelector, (state) => state.isLoading);
export const getCategoryListSelector = createSelector(blogFeatureSelector, (state) => state.categoryList);
export const getArticleListSelector = createSelector(blogFeatureSelector, (state) => state.postList);
export const getArticleDetailSelector = createSelector(blogFeatureSelector, (state) => state.articleDetail);
export const getCommentsListSelector = createSelector(blogFeatureSelector, (state) => state.commentsList);


