import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirScrollAnimationDirective } from './directive/dir-scroll-animation.directive';

@NgModule({
  declarations: [DirScrollAnimationDirective],
  imports: [CommonModule],
  exports: [DirScrollAnimationDirective],
})
export class SharedModule {}
