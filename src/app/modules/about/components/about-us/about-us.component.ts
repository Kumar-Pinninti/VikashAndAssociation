import { Component, OnInit } from '@angular/core';
import { AboutTeamsService } from '../../services/about-teams.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  teamsList!: any[];

  constructor(private aboutTeamsService: AboutTeamsService) {}

  ngOnInit(): void {
    this.teamsList = this.aboutTeamsService.getTeams();
  }
}
