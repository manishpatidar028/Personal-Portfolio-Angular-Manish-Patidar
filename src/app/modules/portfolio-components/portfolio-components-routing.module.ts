import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AwardsAndCurricularactivityComponent } from './components/awards-and-curricularactivity/awards-and-curricularactivity.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'awards', component: AwardsAndCurricularactivityComponent,
  },
  {
    path: 'education', component: EducationComponent,
  },
  {
    path: 'experience', component: ExperienceComponent,
  },
  {
    path: 'skills', component: SkillsComponent,
  },
  {
    path: '**', redirectTo: '/'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioComponentsRoutingModule { }
