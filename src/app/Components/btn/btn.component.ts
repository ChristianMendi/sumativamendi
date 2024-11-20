import { Component } from '@angular/core';
import { BtnAceptarComponent } from './btn-aceptar/btn-aceptar.component';
import { BtnDeclinarComponent } from './btn-declinar/btn-declinar.component';
import { BtnPrimarioComponent } from './btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from './btn-secundario/btn-secundario.component';
import { BtnModoBackComponent } from './btn-modo-back/btn-modo-back.component';


@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [BtnAceptarComponent, BtnDeclinarComponent, BtnPrimarioComponent, BtnSecundarioComponent, BtnModoBackComponent],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {

}
