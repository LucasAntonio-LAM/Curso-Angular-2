import { Component, signal } from '@angular/core';

import { TopoComponent } from './topo/topo';


@Component({
  selector: 'app-root',
  imports: [TopoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app1');
}
