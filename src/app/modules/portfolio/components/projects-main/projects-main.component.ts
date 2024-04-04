import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.css'],
})
export class ProjectsMainComponent implements OnInit {
  projects!: any[];
  categories!: string[];
  activeCategory: string = 'All';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.categories = [
      ...new Set(this.projects.map((project) => project.category)),
    ];
  }

  filterProjects(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.projects = this.portfolioService.getProjects();
    } else {
      this.projects = this.portfolioService
        .getProjects()
        .filter((project) => project.category === category);
    }
  }
}
