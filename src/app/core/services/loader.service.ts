import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeLoaderState } from '@app/shared/stores/blog/blog.actions';
import { IBlogState } from '@app/shared/stores/blog/blog.state';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private store:Store<IBlogState>) { }

  /**
   * Shows loader
   */
   showLoader() {
    this.store.dispatch(changeLoaderState({ isLoading: true }));
  }

  /**
   * Hides loader
   */
   hideLoader() {
    this.store.dispatch(changeLoaderState({ isLoading: false }));
  }
}
