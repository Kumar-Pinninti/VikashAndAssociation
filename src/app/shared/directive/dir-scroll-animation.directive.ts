import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirScrollAnimation]',
})
export class DirScrollAnimationDirective implements AfterViewInit {
  // @Input() animationType: string = ''; // Specify the animation type ('fade-in-up', 'fade-in-down', etc.)
  @Input() threshold: number = 0.2; // Intersection Observer threshold

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement);
  }
}
