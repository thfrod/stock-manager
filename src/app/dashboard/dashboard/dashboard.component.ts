import { Component, OnInit } from '@angular/core';
import { DashboardDataModel } from '@app/@shared/models/utils.model';
import { Subscription } from 'rxjs';
import { DashboardService } from '../dashboard.service';
import { ChartDataModel, TopListCardModel } from '../models/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public busy$: Subscription[] = [];
  public dashboardData: DashboardDataModel;
  public chartData: ChartDataModel = this.emptyChartData;
  public mostSaledProductData: TopListCardModel;
  public lessSaledProductData: TopListCardModel;
  public displayedColumns: string[] = ['image', 'value', 'acquisitionPrice', 'sellingPrice', 'quantity', 'action'];

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit() {
    this.getDashboardData();
  }

  ngOnDestroy() {
    this.busy$.forEach((subscription) => subscription.unsubscribe());
  }

  get emptyChartData() {
    return {
      profit: [],
      cost: [],
      amount: [],
    };
  }

  private getDashboardData() {
    this.busy$.push(
      this.dashboardService.getDashboardData().subscribe({
        next: (data) => {
          this.dashboardData = data;
          this.processData(data);
        },
        error: (err) => {},
      })
    );
  }

  private processData(data: DashboardDataModel) {
    this.chartData.amount = data.amountByMonth;
    this.chartData.profit = data.profitByMonth;
    this.chartData.cost = data.costByMonth;

    this.mostSaledProductData = {
      title: 'Produtos mais vendido',
      icon: 'mood',
      products: data.mostSaledProducts,
      panelClass: 'success',
    };

    this.lessSaledProductData = {
      title: 'Produtos menos vendido',
      icon: 'mood_bad',
      products: data.mostSaledProducts,
      panelClass: 'warn',
    };
  }
}
