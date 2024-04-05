import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { ClientReviewsComponent } from './compoents/client-reviews/client-reviews.component';


@NgModule({
  declarations: [
    ClientReviewsComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }
