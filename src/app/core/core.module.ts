import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from '@app/shared/stores/blog/blog.effect';
import { blogReducer } from '@app/shared/stores/blog/blog.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forRoot({
      blog: blogReducer
    },
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          strictActionTypeUniqueness: true,
        },
      }),
    EffectsModule.forRoot([BlogEffects]),
  ]
})
export class CoreModule { }
