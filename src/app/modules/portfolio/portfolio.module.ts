import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProjectsMainComponent, ViewProjectComponent],
  imports: [CommonModule, SharedModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
