import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoaderService } from '@app/core/services/loader.service';
import { IBlogState } from '@app/shared/stores/blog/blog.state';
import { getLoaderStateSelector } from '@app/shared/stores/blog/blog.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;
  loaderSubscription$: Subscription = new Subscription();

  constructor(
    public loaderService: LoaderService,
    private blogStore: Store<IBlogState>,
  ) { }

  ngOnInit() {
    this.isLoading = false;
    this.loaderSubscription$ = this.blogStore.pipe(select(getLoaderStateSelector)).subscribe((isLoading: boolean) => {
      this.isLoading = isLoading ? true : false;
    });
  }

  /**
   * Destroy Loader Service
   */
  ngOnDestroy() {
    if (this.loaderSubscription$) {
      this.loaderSubscription$.unsubscribe();
    }
  }

}
