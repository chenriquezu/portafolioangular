import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Iproducto } from '../../interfaces/producto.interface';
import { IProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  producto: IProductoDescripcion ;
  id: string;

  constructor(private router: ActivatedRoute,
              public productoservice: ProductoService) { }

  ngOnInit(): void {
     this.router.params
                .subscribe(parametros => {
                                         this.productoservice.getproducto(parametros['id'])
                                             .subscribe((producto: IProductoDescripcion) => {
                                              // console.log(producto);
                                              this.producto=producto;
                                              this.id = parametros['id'];

                                             });
                                            });
  }

}
