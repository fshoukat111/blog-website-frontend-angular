import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Blog';


  constructor(private titleService: Title,private route: ActivatedRoute) {
    this.titleService.setTitle(this.route.snapshot.data['title']);
  }
  ngOnInit(): void {

  }
}
