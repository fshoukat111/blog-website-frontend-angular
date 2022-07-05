import { BlogComments, BlogPost, Categories } from "@app/shared/models";

/** State for Tab store. */
export interface IBlogState {
  isLoading: boolean;
  postList: BlogPost[],
  categoryList: Categories[],
  postListByCategory: BlogPost[],
  articleDetail: any,
  commentsList: BlogComments[],
  pageNumber: number;
}

/** Initial state for Tab store. */
export const initialBlogState: IBlogState = {
  categoryList: [],
  postList: [],
  postListByCategory: [],
  articleDetail: {},
  commentsList: [],
  isLoading: true,
  pageNumber: 1
};
