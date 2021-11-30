import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageNotFoundComponent } from './blog-page-not-found.component';

describe('BlogPageNotFoundComponent', () => {
  let component: BlogPageNotFoundComponent;
  let fixture: ComponentFixture<BlogPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
