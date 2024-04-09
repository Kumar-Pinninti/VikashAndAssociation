import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'vikashAndAssociation';

  // random client icons
  icons = [
    { class: 'fas fa-archway' },
    { class: 'fas fa-university' },
    { class: 'fas fa-store' },
    { class: 'fas fa-hotel' },
    { class: 'fas fa-hospital' },
  ];

  constructor(private router: Router) {
    // this code reset scroll position of go to botton and render page from start point while navigating
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.shuffleIcons();
    }, 5000); // Change icons' position every few seconds
  }

  shuffleIcons() {
    this.icons = this.shuffleArray(this.icons);
  }

  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // sticky scroll script
  isSticky: boolean = false;
  scrollYPos: number = 0;
  scrollProgress: number = 0;
  gradient: string = '';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.isSticky = window.pageYOffset > 300;

    this.scrollYPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    this.scrollProgress =
      (this.scrollYPos / (documentHeight - windowHeight)) * 100;
    this.gradient = `conic-gradient(#b19777 ${this.scrollProgress}%, #999999 ${this.scrollProgress}%)`;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // side panel script
  isSideNavOpen: boolean = false;

  // Array of links with their respective routes
  links = [
    { name: 'Home', route: '/' },
    { name: 'about', route: '/about' },
    { name: 'blogs', route: '/blogs' },
    { name: 'Contact', route: '/contact' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'testimonials', route: '/testimonials' },
  ];

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSideNav() {
    this.isSideNavOpen = false;
  }
}
