import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ){
    return this.regionActiva === region ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion( region: string ){
    this.regionActiva = region;

    this.paisService.buscarPorRegion( region )
        .subscribe(paises => this.paises = paises)
  }
}
