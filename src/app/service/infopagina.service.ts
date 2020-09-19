import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infopagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: infopagina = {};
cargada: false;


  constructor(private http: HttpClient) 
  { 
     this.http.get('assets/data/data-pagina.json')
              .subscribe ( (resp: infopagina) => {
                this.info = resp;
                this.cargada = true;
                console.log(resp);
     });

  }
}
