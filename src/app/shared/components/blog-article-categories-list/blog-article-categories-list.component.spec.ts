import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleCategoriesListComponent } from './blog-article-categories-list.component';

describe('BlogArticleCategoriesListComponent', () => {
  let component: BlogArticleCategoriesListComponent;
  let fixture: ComponentFixture<BlogArticleCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArticleCategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
