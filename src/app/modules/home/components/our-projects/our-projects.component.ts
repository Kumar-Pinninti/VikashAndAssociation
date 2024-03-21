import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css'],
})
export class OurProjectsComponent implements OnInit, OnDestroy {
  slides = [
    {
      pair: [
        {
          title: 'Project 1',
          imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
          id: '1',
        },
        {
          title: 'Project 2',
          imageUrl: 'https://wallpapercave.com/wp/wp2003540.jpg',
          id: '2',
        },
      ],
      active: true,
    },
    {
      pair: [
        {
          title: 'Project 3',
          imageUrl: 'https://wallpapercave.com/wp/wp2752757.jpg',
          id: '3',
        },
        {
          title: 'Project 4',
          imageUrl: 'https://wallpapercave.com/wp/wp2752761.jpg',
          id: '4',
        },
      ],
      active: false,
    },
    {
      pair: [
        {
          title: 'Project 5',
          imageUrl: 'https://wallpapercave.com/wp/wp2003549.jpg',
          id: '5',
        },
        {
          title: 'Project 6',
          imageUrl: 'https://wallpapercave.com/wp/wp2752757.jpg',
          id: '6',
        },
      ],
      active: false,
    },

    // Add more slides as needed
  ];

  currentIndex: number = 0;
  private slideInterval: any;

  constructor() {}

  ngOnInit(): void {
    // Simulate slide change after a few seconds
    this.startSlideInterval();
  }

  ngOnDestroy(): void {
    // Cleanup: clear interval timer to avoid memory leaks
    this.stopSlideInterval();
  }

  startSlideInterval(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideInterval(): void {
    clearInterval(this.slideInterval);
  }

  nextSlide(): void {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.selectSlide(nextIndex);
  }

  selectSlide(index: number): void {
    this.slides.forEach((slide) => (slide.active = false));
    this.slides[index].active = true;
    this.currentIndex = index;
  }
}
