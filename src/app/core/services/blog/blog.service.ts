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
   * Get Posts List based on categories
   * @param category_slug
   * @param page_num
   * @returns Post List
  */
  getPostsList(category_slug: string, page_num?: number): Observable<BlogPost[]> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.post}/${category_slug}?page=${page_num}`);
  }

  /**
   * Get Post Detail
   * @param category_slug
   * @param post_slug
   * @returns Post Detail
  */
  getPostDetail(category_slug: string, post_slug?: string): Observable<BlogPost> {
    return this.requestService.get(`${ApiUrl.backendUrl}/${ApiUrl.post}/${category_slug}/${post_slug}`);
  }

  /**
   * Post/Add Comments of Posts
   * @param post_slug
   * @param comment
   * @returns addCommentofPosts
  */
  addCommentofPosts(post_slug: string, comments: BlogComments): Observable<BlogComments> {
    return this.requestService.post(
      `${ApiUrl.backendUrl}/${ApiUrl.post}/${post_slug}/${ApiUrl.comment}/${ApiUrl.create}`, comments);
  }

  /**
   * Get Comments of Posts
   * @param post_slug
   * @returns getCommentofPosts
  */
  getCommentofPosts(post_slug: string): Observable<BlogComments[]> {
    return this.requestService.get(
      `${ApiUrl.backendUrl}/${ApiUrl.post}/${post_slug}/${ApiUrl.comment}/${ApiUrl.list}`);
  }
}
