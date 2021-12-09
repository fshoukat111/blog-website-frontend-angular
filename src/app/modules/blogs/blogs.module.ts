import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import {
  BlogArticleListByCategoryComponent,
  BlogArticleDetailComponent,
  } from '@app/modules/blogs/pages';
import { MaterialUiModule } from '@app/shared/modules/materials-ui';
import {
  BlogArticleCommentsComponent,
  BlogGetCommentsComponent } from '@app/modules/blogs/components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogArticleListByCategoryComponent,
    BlogArticleDetailComponent,
    BlogArticleCommentsComponent,
    BlogGetCommentsComponent

  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MaterialUiModule,
    FormsModule
  ]
})
export class BlogsModule { }
