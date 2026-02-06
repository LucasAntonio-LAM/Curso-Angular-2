import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  imports: [],
  templateUrl: './progresso.html',
  styleUrl: './progresso.css',
})
export class ProgressoComponent {
  
  @Input('xyz') public progresso: number = 0

}
