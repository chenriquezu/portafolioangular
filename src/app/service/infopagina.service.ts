import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infopagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

info: infopagina = {};
equipo: any = [];
cargada: false;


  constructor(private http: HttpClient) 
  { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private  cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
        .subscribe ( (resp: infopagina) => {
    this.info = resp;
    });
  }

  private cargarEquipo(){
     this.http.get('https://angular-html-6c8db.firebaseio.com/equipo.json')
         .subscribe((resp: any[])  => {
           this.equipo = resp;
           console.log(resp);
         })


  }
}
