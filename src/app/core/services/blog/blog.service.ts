import { Injectable } from '@angular/core';
import { RequestService } from '@app/core';
import { Observable, of } from 'rxjs';
import { ApiUrl } from '@app/shared/constants/resource-refrances';
import { BlogComments, BlogPost, Categories } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(public requestService: RequestService) { }

  /**
   * Get Categories from Api
   * @returns Catgories
  */
  getCategoriesList(): Observable<Categories[]> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.categories}`);
  }

  /**
   * Get Articles List based on categories
   * @param category_slug
   * @param page_num
   * @returns Post List
  */
  getArticlesList(category_slug: string): Observable<BlogPost[]> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.article}/${category_slug}`);
  }

  // getPostsList(category_slug: string, page_num?: number): Observable<BlogPost[]> {
  //   return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.post}/${category_slug}?page=${page_num}`);
  // }

  /**
   * Get Article Detail
   * @param category_slug
   * @param article_slug
   * @returns Post Detail
  */
  getArticleDetail(category_slug: string, article_slug: string): Observable<BlogPost> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.article}/${category_slug}/${article_slug}`);
  }

  /**
   * Post/Add Comments of Posts
   * @param article_slug
   * @param comment
   * @returns addCommentofPosts
  */
  postArticleComments(article_slug: string, comments: BlogComments): Observable<BlogComments> {
    return this.requestService.post(
      `${ApiUrl.backendUrl}/${ApiUrl.article}/${article_slug}/${ApiUrl.comment}/${ApiUrl.list}`, comments);
  }

  /**
   * Get Comments of Posts
   * @param article_slug
   * @returns getCommentofPosts
  */
  getArticleComments(article_slug: string): Observable<BlogComments[]> {
    return this.requestService.get(
      `${ApiUrl.backendUrl}/${ApiUrl.article}/${article_slug}/${ApiUrl.comment}/${ApiUrl.list}`);
  }
}
