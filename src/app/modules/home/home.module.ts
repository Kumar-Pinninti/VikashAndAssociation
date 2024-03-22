import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './home.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { OurBlogsComponent } from './components/our-blogs/our-blogs.component';



@NgModule({
  declarations: [
    BannerComponent,
    ServicesComponent,
    HomeComponent,
    OurProjectsComponent,
    OurBlogsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
