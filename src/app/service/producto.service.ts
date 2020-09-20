import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Iproducto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
cargando = true;
productos: any = []; 
  constructor(private http: HttpClient)
  {
    this.cargarProductos(); 
  }
  
private cargarProductos()
{
  this.http.get('https://angular-html-6c8db.firebaseio.com/productos_idx.json')
           .subscribe((resp: any[] ) => {
            console.log(resp);
            this.productos = resp;
            this.cargando = false;

           });
}
}
