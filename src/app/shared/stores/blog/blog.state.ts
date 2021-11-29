import { BlogComments, BlogPost, Categories } from "@app/shared/models";

/** State for Tab store. */
export interface IBlogState {
  isLoading: boolean;
  postList: BlogPost[] ,
  categoryList: Categories[] ,
  postListByCategory: BlogPost[] ,
  commentsList:BlogComments[] ,
  postDetail:BlogPost
}

/** Initial state for Tab store. */
export const initialBlogState: IBlogState = {
  categoryList:[],
  postList: [],
  postListByCategory: [],
  isLoading: true,
  commentsList: [],
  postDetail:new BlogPost
};
