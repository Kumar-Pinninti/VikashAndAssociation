import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
