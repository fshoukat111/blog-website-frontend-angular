import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogComments } from '@app/shared/models';

@Component({
  selector: 'app-blog-article-comments',
  templateUrl: './blog-article-comments.component.html',
  styleUrls: ['./blog-article-comments.component.sass']
})
export class BlogArticleCommentsComponent implements OnInit {

  @Output() dispatchArticleComment = new EventEmitter<BlogComments>();

  postComments: BlogComments = new BlogComments();

  constructor() { }

  ngOnInit(): void { }

  /**
   * dispatch Comments of Posts
  */
  loadAddCommentsOfPost() {
    this.dispatchArticleComment.emit(this.postComments);
    this.postComments = new BlogComments();
  }
}
