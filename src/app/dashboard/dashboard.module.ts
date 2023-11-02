import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { TopListCardComponent } from './components/top-list-card/top-list-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, MaterialModule, DashboardRoutingModule],
  declarations: [DashboardComponent, DashboardChartComponent, TopListCardComponent],
})
export class DashboardModule {}
