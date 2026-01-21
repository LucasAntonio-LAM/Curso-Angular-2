import { Component, signal } from '@angular/core';

import { TopoComponent } from './topo/topo';
import { PainelComponent } from './painel/painel';

@Component({
  selector: 'app-root',
  imports: [TopoComponent, PainelComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app1');
}
