import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./modules/home/home.module').then((mod) => mod.HomeModule);
    },
  },
  {
    path: 'about',
    loadChildren: () => {
      return import('./modules/about/about.module').then(
        (mod) => mod.AboutModule
      );
    },
  },
  {
    path: 'blogs',
    loadChildren: () => {
      return import('./modules/blogs/blogs.module').then(
        (mod) => mod.BlogsModule
      );
    },
  },
  {
    path: 'contact',
    loadChildren: () => {
      return import('./modules/contact/contact.module').then(
        (mod) => mod.ContactModule
      );
    },
  },
  {
    path: 'portfolio',
    loadChildren: () => {
      return import('./modules/portfolio/portfolio.module').then(
        (mod) => mod.PortfolioModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
