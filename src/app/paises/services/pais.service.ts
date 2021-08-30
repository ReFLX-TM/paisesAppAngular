import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Pais[]> {

    const url: string = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Pais[]>( url );

  }

  buscarCapital( termino: string ): Observable<Pais[]> {

    const url: string = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Pais[]>( url );

  }

  buscarPorAlpha( id: string ): Observable<Pais> {

    const url: string = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Pais>( url );

  }
}