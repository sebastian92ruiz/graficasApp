import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDataDona() {
    return this.getUsuariosRedesSociales()
        .pipe(
          delay(1500),
           map((data) => {
            return {
              labels: Object.keys(data),
              datasets: [{ data: Object.values(data), backgroundColor:['#6405F0','#0724E3', '#05A0F0', '#0AFCF9', '#0CE873'],
                        hoverBackgroundColor:['#6405F0','#0724E3', '#05A0F0', '#0AFCF9', '#0CE873'] }],
            };
          })
        )
  }

}
