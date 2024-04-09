import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projects = [
    {
      id: 1,
      name: 'Project 1',
      category: 'Web Development',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-01',
      imageGallery: [
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
      ],
    },
    {
      id: 2,
      name: 'Project 2',
      category: 'Mobile Development',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-02',
      imageGallery: [
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
      ],
    },
    {
      id: 3,
      name: 'Project 3',
      category: 'Web Development',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-03',
      imageGallery: [
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
      ],
    },
    {
      id: 4,
      name: 'Project 4',
      category: 'ios Development',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-01',
      imageGallery: [
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
      ],
    },
    {
      id: 5,
      name: 'Project 5',
      category: 'Native Development',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-02',
      imageGallery: [
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
      ],
    },
    {
      id: 6,
      name: 'Project 6',
      category: 'ios Development',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-03',
      imageGallery: [
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
        'https://wallpapercave.com/wp/wp2752752.jpg',
      ],
    },

    // Add more projects as needed
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects.find((project) => project.id === id);
  }
}
