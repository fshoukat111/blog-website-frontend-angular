import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@app/shared/modules/materials-ui';
import { FormsModule } from '@angular/forms';
import {
  BlogCategoriesListComponent,
  LoaderComponent,
  BlogPostListByCategoryComponent,
  BlogPostDetailComponent,
  BlogPostsCommentsComponent,
  BlogPageNotFoundComponent,
  BlogGetCommentsComponent
} from '@app/shared/components';


/**
 * SHARED MODULES
 */
const SHARED_MODULES = [
  CommonModule,
  MaterialUiModule,
  FormsModule
]

/**
 * SHARED COMPONENT
 */
const SHARED_COMPONENTS = [
  LoaderComponent,
  BlogCategoriesListComponent,
  BlogPostListByCategoryComponent,
  BlogPostDetailComponent,
  BlogPostsCommentsComponent,
  BlogGetCommentsComponent,
  BlogPageNotFoundComponent,

]

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS,],

})
export class SharedModule { }
