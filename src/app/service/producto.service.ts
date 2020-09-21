import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Iproducto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'dns';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {
cargando = true;
productos: any = []; 
productosFiltrados:  any = []; //Iproducto[] = [];

  constructor(private http: HttpClient)
  {
    this.cargarProductos(); 
  }
  
private cargarProductos()
{
  return new Promise ((resolve,rejects) => {
    this.http.get('https://angular-html-6c8db.firebaseio.com/productos_idx.json')
    .subscribe((resp: any[] ) => {
     this.productos = resp;
     this.cargando = false;
     resolve();
    });
  });
}

  

getproducto(id: string){
  return this.http.get(`https://angular-html-6c8db.firebaseio.com/productos/${ id }.json`);
}

buscarProducto( termino: string ) {


  if ( this.productos.length === 0 ) {
    // cargar productos
    this.cargarProductos().then( () => {
      // ejecutar después de tener los productos
      // Aplicar filtro
      this.filtrarProductos( termino );
    });

  } else {
    // aplicar el filtro
    this.filtrarProductos( termino );
  }

}

private filtrarProductos( termino: string ) {

  // console.log(this.productos);
  this.productosFiltrados = [];

  termino = termino.toLocaleLowerCase();

  this.productos.forEach( prod => {

    const tituloLower = prod.titulo.toLocaleLowerCase();

    if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
      this.productosFiltrados.push( prod );
    }

  });


}

}

