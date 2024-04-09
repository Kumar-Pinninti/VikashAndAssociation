import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  carouselItems = [
    {
      image: 'https://wallpapercave.com/wp/wp2003540.jpg',
      title: 'Create the future of architecture',
      description:
        'Eos, blanditiis nesciunt ab maxime dolorum optio quia vitae ratione. Itaque nesciunt vitae illo dolorum officia ipsum enim quia quas blanditiis nulla.',
      buttonText: 'Know More',
      redirectLink: '/portfolio',
    },
    {
      image: 'https://wallpapercave.com/wp/wp2752752.jpg',
      title: 'Design, Built and Live',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      buttonText: 'Know More',
      redirectLink: '/portfolio/3',
    },
    // Add more items as needed
  ];

  currentIndex = 0;

  @ViewChildren('carouselSlide') carouselSlides!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Wait for all images to load before displaying the first slide
    this.carouselSlides.forEach((slide, index) => {
      const img = slide.nativeElement.querySelector('img');
      img.onload = () => {
        if (index === 0) {
          this.showSlide(0);
        }
      };
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    this.showSlide(this.currentIndex);
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselItems.length) %
      this.carouselItems.length;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    const slides = document.getElementsByClassName('carousel-slide');
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = 'none';
    }
    (slides[index] as HTMLElement).style.display = 'block';
  }

  @HostListener('swipeleft')
  onSwipeLeft() {
    this.next();
  }

  @HostListener('swiperight')
  onSwipeRight() {
    this.prev();
  }
}
