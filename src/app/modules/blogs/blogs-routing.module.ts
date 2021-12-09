import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BlogArticleDetailComponent,
  BlogArticleListByCategoryComponent } from '@app/modules/blogs/pages';

const routes: Routes = [
  {
    path: ':category_slug', component: BlogArticleListByCategoryComponent,
    children: [

    ]
  },
  { path: ':category_slug/:post_slug', component: BlogArticleDetailComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
