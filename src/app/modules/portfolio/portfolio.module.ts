import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';


@NgModule({
  declarations: [
    ProjectsMainComponent,
    ViewProjectComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
