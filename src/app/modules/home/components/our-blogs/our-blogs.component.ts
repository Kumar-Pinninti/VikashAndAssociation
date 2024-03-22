import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blogs',
  templateUrl: './our-blogs.component.html',
  styleUrls: ['./our-blogs.component.css']
})
export class OurBlogsComponent implements OnInit {

  blogsList = [
    {
      title: 'Title 1',
      date: 'Mar 20, 2024',
      imageUrl: 'https://wallpapercave.com/wp/wp2003540.jpg',
    },
    {
      title: 'Title 2',
      date: 'Mar 21, 2024',
      imageUrl: 'https://wallpapercave.com/wp/wp2003540.jpg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.blogsList;
  }

}
