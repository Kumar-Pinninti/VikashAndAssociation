import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsGalleryComponent } from './components/blogs-gallery/blogs-gallery.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BlogsGalleryComponent, BlogViewComponent],
  imports: [CommonModule, SharedModule, BlogsRoutingModule],
})
export class BlogsModule {}
