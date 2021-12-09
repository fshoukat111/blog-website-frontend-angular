import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '@app/shared/modules/materials-ui';
import { FormsModule } from '@angular/forms';
import {
  BlogArticleCategoriesListComponent,
  LoaderComponent,

} from '@app/shared/components';
import { BlogsModule } from '@app/modules/blogs/blogs.module';


/**
 * SHARED MODULES
 */
const SHARED_MODULES = [
  CommonModule,
  MaterialUiModule,
  FormsModule,
  BlogsModule
]

/**
 * SHARED COMPONENT
 */
const SHARED_COMPONENTS = [
  LoaderComponent,
  BlogArticleCategoriesListComponent

]

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS],

})
export class SharedModule { }
