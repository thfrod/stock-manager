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
}
