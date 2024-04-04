import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
})
export class ViewProjectComponent implements OnInit {
  project: any;
  projectId!: number;
  totalProjects!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = +params['id']; // Get the project ID from route parameters
      this.project = this.portfolioService.getProjectById(this.projectId);
      this.totalProjects = this.portfolioService.getProjects().length;
    });
  }

  navigateToProject(index: number) {
    const project = this.portfolioService.getProjectById(index);
    console.log('this index', project);
    if (project) {
      this.router.navigate(['/portfolio/', project.id]);
    }
  }
  
  goToPortfolioPage() {
    this.router.navigate(['/portfolio']);
  }

  goToPreviousProject() {
    this.navigateToProject(this.projectId - 1);
  }

  goToNextProject() {
    this.navigateToProject(this.projectId + 1);
  }
}
