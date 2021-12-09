import { environment } from "@app/environments/environment";

/**
 * Api Urls
 */
export class ApiUrl {
  //base url
  static backendUrl = `${environment.backend_url}`;
  static categories = 'categories';
  static posts = 'posts';
  static article = 'article';
  static comment = 'comment';
  static create = 'create';
  static list = 'list';

}
