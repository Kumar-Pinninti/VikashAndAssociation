import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsGalleryComponent } from './components/blogs-gallery/blogs-gallery.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';

const routes: Routes = [
  { path: '', component: BlogsGalleryComponent },
  { path: 'blogs/:blogId', component: BlogViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
