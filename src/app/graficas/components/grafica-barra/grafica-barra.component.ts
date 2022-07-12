import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() barChartData: ChartData<'bar'> = { 
    // labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#E80020', hoverBackgroundColor: 'red' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F2027B', hoverBackgroundColor: 'red' },
      // { data: [ 8, 33, 70, 69, 56, 80, 100 ], label: 'Series C', backgroundColor: '#DB01BF', hoverBackgroundColor: 'red' }
    ] 
  };
  @Input() labels: string[] = [];
  @Input() horizontal: boolean = false;


  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
    this.barChartData.labels = this.labels;
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, },
      // datalabels: { anchor: 'end', align: 'end' }
    }
  };
 
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    // DataLabelsPlugin
  ];

}
