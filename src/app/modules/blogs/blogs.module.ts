import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsGalleryComponent } from './components/blogs-gallery/blogs-gallery.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';


@NgModule({
  declarations: [
    BlogsGalleryComponent,
    BlogViewComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
