import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blogs-gallery',
  templateUrl: './blogs-gallery.component.html',
  styleUrls: ['./blogs-gallery.component.css'],
})
export class BlogsGalleryComponent implements OnInit {
  blogsList!: any[];

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsList = this.blogsService.getBlogs();
  }
}
