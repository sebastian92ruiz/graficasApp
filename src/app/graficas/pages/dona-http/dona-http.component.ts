import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const datos = Object.values(data);
    //     // this.doughnutChartLabels = labels;
    //     // this.doughnutChartData.push(datos);
    //     this.doughnutChartData={
    //       labels:Object.keys(data),
    //       datasets:[{data:Object.values(data),
    //           backgroundColor:['#6405F0','#0724E3', '#05A0F0', '#0AFCF9', '#0CE873'],
    //           hoverBackgroundColor:['#6405F0','#0724E3', '#05A0F0', '#0AFCF9', '#0CE873']
    //         }]
    //     }
    //   })
    this.graficasService
      .getUsuariosRedesSocialesDataDona()
      .subscribe(({ labels, datasets }) => {
        // console.log(data);
        this.doughnutChartData = { labels, datasets };
      })
  }

}
