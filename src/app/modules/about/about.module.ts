import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ZiSharedAboutComponent } from './components/zi-shared-about/zi-shared-about.component';
import { ViewTheMemberComponent } from './components/view-the-member/view-the-member.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AboutUsComponent,
    ZiSharedAboutComponent,
    ViewTheMemberComponent,
  ],
  imports: [CommonModule, SharedModule, AboutRoutingModule],
  exports: [ZiSharedAboutComponent],
})
export class AboutModule {}
