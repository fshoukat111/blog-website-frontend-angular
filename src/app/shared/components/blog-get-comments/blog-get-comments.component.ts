import { Component, Input, OnInit } from '@angular/core';
import { BlogComments } from '@app/shared/models';

@Component({
  selector: 'app-blog-get-comments',
  templateUrl: './blog-get-comments.component.html',
  styleUrls: ['./blog-get-comments.component.sass']
})
export class BlogGetCommentsComponent implements OnInit {

  @Input() commentsList: BlogComments[] = [];

  constructor() { }

  ngOnInit(): void {
    this.commentsList = []
  }

}
