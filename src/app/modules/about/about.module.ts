import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ZiSharedAboutComponent } from './components/zi-shared-about/zi-shared-about.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    ZiSharedAboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    ZiSharedAboutComponent
  ]
})
export class AboutModule { }
