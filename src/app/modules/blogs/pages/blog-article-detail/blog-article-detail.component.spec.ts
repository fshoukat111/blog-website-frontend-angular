import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleDetailComponent } from './blog-article-detail.component';

describe('BlogPostDetailComponent', () => {
  let component: BlogArticleDetailComponent;
  let fixture: ComponentFixture<BlogArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
