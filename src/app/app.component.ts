import { Component } from '@angular/core';
import { InfopaginaService } from './service/infopagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infopagina: InfopaginaService){}
}


