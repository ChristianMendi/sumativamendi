import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './Components/btn/btn.component';
import { HeaderComponent } from './Components/header/header.component';
import { InputComponent } from './Components/input/input.component';
import { VisualizadorComponent } from './Components/visualizador/visualizador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BtnComponent, InputComponent, VisualizadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
