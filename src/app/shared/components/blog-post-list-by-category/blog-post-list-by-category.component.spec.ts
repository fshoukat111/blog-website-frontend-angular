import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostListByCategoryComponent } from './blog-post-list-by-category.component';

describe('BlogPostListByCategoryComponent', () => {
  let component: BlogPostListByCategoryComponent;
  let fixture: ComponentFixture<BlogPostListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostListByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
