import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardSectionHeadComponent } from './dashboard-section-head/dashboard-section-head.component';
import { DashboardSectionNewsComponent } from './dashboard-section-news/dashboard-section-news.component';
import { DashboardSectionStaticComponent } from './dashboard-section-static/dashboard-section-static.component';
import { DashboardSectionTeamComponent } from './dashboard-section-team/dashboard-section-team.component';
import { DashboardSectionTimelineComponent } from './dashboard-section-timeline/dashboard-section-timeline.component';


@NgModule({
  declarations: [
    MainDashboardComponent,
    DashboardSectionHeadComponent,
    DashboardSectionNewsComponent,
    DashboardSectionStaticComponent,
    DashboardSectionTeamComponent,
    DashboardSectionTimelineComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AvatarModule,
    ImageModule,
    ButtonModule,
    CardModule
  ]
})
export class DashboardModule { }
