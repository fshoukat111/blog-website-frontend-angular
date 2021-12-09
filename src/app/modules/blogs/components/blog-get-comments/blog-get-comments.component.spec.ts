import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGetCommentsComponent } from './blog-get-comments.component';

describe('BlogGetCommentsComponent', () => {
  let component: BlogGetCommentsComponent;
  let fixture: ComponentFixture<BlogGetCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGetCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGetCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
