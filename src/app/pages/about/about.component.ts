import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../service/infopagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _servicio: InfopaginaService) {

   }

  ngOnInit(): void {
  }

}
