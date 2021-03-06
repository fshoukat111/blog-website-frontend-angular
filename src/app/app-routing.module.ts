import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@app/shared/constants';
// import {
//   BlogPageNotFoundComponent} from '@app/shared/components';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  // {path:':category_slug',component:BlogArticleListByCategoryComponent},
  // {path:'detail/:category_slug/:post_slug',component:BlogArticleDetailComponent},
  // {path:'404', component: BlogPageNotFoundComponent },
  // {path:'**', pathMatch:'full', redirectTo: '/404'},
  {
    path: '',
    loadChildren: () => import('@app/modules/blogs/blogs.module').then(m => m.BlogsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
