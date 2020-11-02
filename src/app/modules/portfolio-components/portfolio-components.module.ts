import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioComponentsRoutingModule } from './portfolio-components-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AwardsAndCurricularactivityComponent } from './components/awards-and-curricularactivity/awards-and-curricularactivity.component';


@NgModule({
  declarations: [AboutComponent, ExperienceComponent, EducationComponent, SkillsComponent, AwardsAndCurricularactivityComponent],
  imports: [
    CommonModule,
    PortfolioComponentsRoutingModule
  ]
})
export class PortfolioComponentsModule { }
