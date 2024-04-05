import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientReviewsComponent } from './compoents/client-reviews/client-reviews.component';

const routes: Routes = [
  {path: '', component: ClientReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
