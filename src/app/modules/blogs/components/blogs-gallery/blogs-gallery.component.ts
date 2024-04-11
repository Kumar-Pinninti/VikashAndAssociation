import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blogs-gallery',
  templateUrl: './blogs-gallery.component.html',
  styleUrls: ['./blogs-gallery.component.css'],
})
export class BlogsGalleryComponent implements OnInit, AfterViewInit {
  blogsList!: any[];
  @ViewChildren('blogRow') blogRows!: QueryList<ElementRef>;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsList = this.blogsService.getBlogs();
  }

  ngAfterViewInit(): void {
    if (this.blogRows) {
      this.observeBlogRows();
    }
  }

  observeBlogRows() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // When 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('.fade-in-left, .fade-in-right')
            .forEach((element) => {
              element.classList.add('active');
            });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.blogRows.forEach((row) => {
      observer.observe(row.nativeElement);
    });
  }
}
