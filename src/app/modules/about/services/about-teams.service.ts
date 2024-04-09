import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutTeamsService {
  private teamsList = [
    {
      memberId: 1,
      name: 'john doe',
      designation: 'Associate',
      imageUrl: 'https://wallpapercave.com/wp/wp6621241.jpg',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
    },
    {
      memberId: 2,
      name: 'jimmy doe',
      designation: 'Associate',
      imageUrl: 'https://wallpapercave.com/wp/wp6621241.jpg',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
    },
    {
      memberId: 3,
      name: 'jane doe',
      designation: 'Associate',
      imageUrl: 'https://wallpapercave.com/wp/wp6621241.jpg',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
    },
    {
      memberId: 4,
      name: 'jay doe',
      designation: 'Associate',
      imageUrl: 'https://wallpapercave.com/wp/wp6621241.jpg',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis vitae sunt repudiandae similique Ullam voluptatem fugiat quod, molestias voluptatum labore nobis in a excepturi sed id saepe officia Praesentium, quisquam',
      ],
    },
    // Add more projects as needed
  ];

  constructor() {}

  getTeams() {
    return this.teamsList;
  }

  getTeamById(id: number) {
    return this.teamsList.find((team) => team.memberId === id);
  }
}
