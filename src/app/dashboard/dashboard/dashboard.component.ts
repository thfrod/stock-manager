import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardDataModel } from '@app/@shared/models/utils.model';
import { Subscription } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public busy$: Subscription[] = [];
  public dashboardData: DashboardDataModel;

  constructor(private readonly dashboardService: DashboardService, private http: HttpClient) {}

  ngOnInit() {
    this.getDashboardData();
    this.createChart();
  }

  ngOnDestroy() {
    this.busy$.forEach((subscription) => subscription.unsubscribe());
  }

  private getDashboardData() {
    this.busy$.push(
      this.dashboardService.getDashboardData().subscribe({
        next: (data) => {
          this.dashboardData = data;
        },
        error: (err) => {
          console.log(err);
        },
      })
    );
  }

  private createChart() {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [this.dashboardData.amountByMonth, this.dashboardData.costByMonth, this.dashboardData.profitByMonth],
    };
  }
}
