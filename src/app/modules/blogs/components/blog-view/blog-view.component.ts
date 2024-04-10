import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  blogId: any;
  singleBlog: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blogId = +params['blogId']; // Get the blog ID from route parameters
      this.singleBlog = this.blogService.getBlogById(this.blogId);
    });
  }
}
