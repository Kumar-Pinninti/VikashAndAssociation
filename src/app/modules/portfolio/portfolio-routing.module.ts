import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsMainComponent } from './components/projects-main/projects-main.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';

const routes: Routes = [
  { path: '', component: ProjectsMainComponent },
  { path: ':id', component: ViewProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
