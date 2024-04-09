import { Component, OnInit } from '@angular/core';
import { AboutTeamsService } from '../../services/about-teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-the-member',
  templateUrl: './view-the-member.component.html',
  styleUrls: ['./view-the-member.component.css'],
})
export class ViewTheMemberComponent implements OnInit {
  memberId: any;
  teamMember: any;

  constructor(
    private route: ActivatedRoute,
    private aboutTeamService: AboutTeamsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.memberId = +params['memberId']; // Get the team ID from route parameters
      this.teamMember = this.aboutTeamService.getTeamById(this.memberId);
    });
  }
}
