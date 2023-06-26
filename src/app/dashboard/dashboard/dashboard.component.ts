import { Component, OnInit } from '@angular/core';
import { DashboardDataModel } from '@app/@shared/models/utils.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public dashboardData: DashboardDataModel = this.dashboardService.getDashboardData();

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit() {}
}
