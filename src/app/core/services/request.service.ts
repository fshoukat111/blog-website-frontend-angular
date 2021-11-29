import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  /**
   * Get Data
   * @param url
   * @param obj
   * @returns
   */
  get(url: string, obj?: any): Observable<any> {
    return this.http.get(url, obj);
  }

  /**
   * Post Data
   * @param url
   * @param obj
   * @returns
   */
  post(url: string, obj?: any): Observable<any> {
    return this.http.post(url, obj);
  }

  /**
   * Update Data
   * @param url
   * @param obj
   * @returns
   */
  put(url: string, obj: any): Observable<any> {
    return this.http.put(url, obj);
  }

  /**
   * Delete Data
   * @param url
   * @param obj
   * @returns
   */
  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

/**
 * Patch Data
 * @param url
 * @param obj
 * @returns
 */
  patch(url: string, obj: any): Observable<any> {
    return this.http.patch(url, obj);
  }
}
