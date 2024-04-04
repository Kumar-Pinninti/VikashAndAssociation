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
      description: 'Description for Project 1',
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-01',
    },
    {
      id: 2,
      name: 'Project 2',
      category: 'Mobile Development',
      description: 'Description for Project 2',
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-02',
    },
    {
      id: 3,
      name: 'Project 3',
      category: 'Web Development',
      description: 'Description for Project 3',
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-03',
    },
    {
      id: 4,
      name: 'Project 4',
      category: 'ios Development',
      description: 'Description for Project 1',
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-01',
    },
    {
      id: 5,
      name: 'Project 5',
      category: 'Native Development',
      description: 'Description for Project 2',
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-02',
    },
    {
      id: 6,
      name: 'Project 6',
      category: 'ios Development',
      description: 'Description for Project 3',
      imageUrl: 'https://wallpapercave.com/wp/wp2752752.jpg',
      date: '2024-01-03',
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
