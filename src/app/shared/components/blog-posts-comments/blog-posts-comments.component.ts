import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogComments } from '@app/shared/models';

@Component({
  selector: 'app-blog-posts-comments',
  templateUrl: './blog-posts-comments.component.html',
  styleUrls: ['./blog-posts-comments.component.sass']
})
export class BlogPostsCommentsComponent implements OnInit {

  @Output() dispatchAddCommentPost = new EventEmitter<BlogComments>();

  postComments: BlogComments = new BlogComments();

  constructor() { }

  ngOnInit(): void { }

  /**
   * dispatch Comments of Posts
  */
  loadAddCommentsOfPost() {
    this.dispatchAddCommentPost.emit(this.postComments);
  }
}
