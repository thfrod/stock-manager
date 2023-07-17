import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartDataModel } from '../../models/dashboard.model';
@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit {
  @Input() chartData: ChartDataModel;
  public chart: Chart;

  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart();
  }

  private createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            label: 'Montante',
            data: this.chartData.amount,
            backgroundColor: '#2196f3',
          },
          {
            label: 'Lucro',
            data: this.chartData.profit,
            backgroundColor: '#69F0AE',
          },
          {
            label: 'Custo',
            data: this.chartData.cost,
            backgroundColor: '#F44336',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
      },
    });
  }
}
