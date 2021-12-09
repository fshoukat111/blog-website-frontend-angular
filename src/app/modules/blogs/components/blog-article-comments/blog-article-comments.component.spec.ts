import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleCommentsComponent } from './blog-article-comments.component';

describe('BlogArticleCommentsComponent', () => {
  let component: BlogArticleCommentsComponent;
  let fixture: ComponentFixture<BlogArticleCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArticleCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
