import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@app/shared/modules/materials-ui';
import {
  BlogCategoriesListComponent,
  LoaderComponent,
  BlogPostListByCategoryComponent,
  BlogPostDetailComponent,
  BlogPostsCommentsComponent
} from '@app/shared/components';
import { FormsModule } from '@angular/forms';
import { BlogGetCommentsComponent } from './components/blog-get-comments/blog-get-comments.component';

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

]

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS, BlogGetCommentsComponent,],

})
export class SharedModule { }
