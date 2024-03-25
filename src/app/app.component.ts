import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vikashAndAssociation';

  // sticky scroll script
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.isSticky = window.pageYOffset > 300;
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
  ];

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSideNav() {
    this.isSideNavOpen = false;
  }
}
