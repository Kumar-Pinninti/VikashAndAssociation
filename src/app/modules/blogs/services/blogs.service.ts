import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private blogsList = [
    {
      blogId: 1,
      blogTitle: 'BLOG NAME SFHSFHFF FGAF FGFHAF AFGFFGSFFGFA FGYGAF AFAG',
      blogAuthor: 'viskash',
      blogDate: '31 march 2024',
      blogTags: ['Architecture', 'modern buildings'],
      blogImageUrl: 'https://wallpapercave.com/wp/wp2752807.jpg',
      blogDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      blogGallery: [
        'https://wallpapercave.com/wp/wp2752807.jpg',
        'https://wallpapercave.com/wp/wp2752807.jpg',
      ],
      blogAddMore: [
        {
          blogSubheading: 'adhyadyagdyagd',
          blogSubDescription: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
          ],
        },
        {
          blogSubheading: 'adhyadyagdyagd',
          blogSubDescription: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
          ],
          blogSubGallery: [
            'https://wallpapercave.com/wp/wp2752807.jpg',
            'https://wallpapercave.com/wp/wp2752807.jpg',
          ],
        },
      ],
    },
    {
      blogId: 2,
      blogTitle: 'BLOG NAME SFHSFHFF FGAF FGFHAF AFGFFGSFFGFA FGYGAF AFAG',
      blogAuthor: 'viskash',
      blogDate: '30 march 2024',
      blogTags: ['Architecture', 'modern buildings'],
      blogImageUrl: 'https://wallpapercave.com/wp/wp2752807.jpg',
      blogDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      blogAddMore: [
        {
          blogSubheading: 'adhyadyagdyagd',
          blogSubDescription: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
          ],
          blogSubGallery: [
            'https://wallpapercave.com/wp/wp6621241.jpg',
            'https://wallpapercave.com/wp/wp6621241.jpg',
          ],
        },
      ],
    },
    {
      blogId: 2,
      blogTitle: 'BLOG NAME SFHSFHFF FGAF FGFHAF AFGFFGSFFGFA FGYGAF AFAG',
      blogAuthor: 'viskash',
      blogDate: '28 march 2024',
      blogTags: ['Architecture', 'modern buildings'],
      blogImageUrl: 'https://wallpapercave.com/wp/wp2752807.jpg',
      blogDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      blogAddMore: [
        {
          blogSubheading: 'adhyadyagdyagd',
          blogSubDescription: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
          ],
          blogSubGallery: [
            'https://wallpapercave.com/wp/wp6621241.jpg',
            'https://wallpapercave.com/wp/wp6621241.jpg',
          ],
        },
      ],
    },
    {
      blogId: 4,
      blogTitle: 'BLOG NAME SFHSFHFF FGAF FGFHAF AFGFFGSFFGFA FGYGAF AFAG',
      blogAuthor: 'viskash',
      blogDate: '27 march 2024',
      blogTags: ['Architecture', 'modern buildings'],
      blogImageUrl: 'https://wallpapercave.com/wp/wp2752807.jpg',
      blogDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      blogAddMore: [
        {
          blogSubheading: 'adhyadyagdyagd',
          blogSubDescription: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
          ],
          blogSubGallery: [
            'https://wallpapercave.com/wp/wp6621241.jpg',
            'https://wallpapercave.com/wp/wp6621241.jpg',
          ],
        },
      ],
    },

    // Add more projects as needed
  ];

  constructor() {}

  getBlogs() {
    return this.blogsList;
  }

  getBlogById(id: number) {
    return this.blogsList.find((team) => team.blogId === id);
  }
}
