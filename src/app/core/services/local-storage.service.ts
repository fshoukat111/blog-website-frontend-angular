import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  /**
   * set localStorage
   * @param key
   * @param value
   */
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * get localStorage
   * @param key
   */
  get(key: string): any {
    const item: any = localStorage.getItem(key);
    return JSON.parse(item);
  }

  /**
   * delete localStorage
   * @param key
   */
  delete(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * clear localStorage
   */
  clear() {
    localStorage.clear();
  }
}
