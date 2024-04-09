import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewTheMemberComponent } from './components/view-the-member/view-the-member.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'about/:memberId', component: ViewTheMemberComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
