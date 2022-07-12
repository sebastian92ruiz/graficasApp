import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100, 150 ],
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0', '#0CE873'],
        hoverBackgroundColor: ['#6405F0','#0724E3', '#05A0F0', '#0CE873'] 
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


}
