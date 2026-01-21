import { Component } from '@angular/core';
import { ProgressoComponent } from '../progresso/progresso';
import { TentativasComponent } from '../tentativas/tentativas';

@Component({
  selector: 'app-painel',
  imports: [TentativasComponent, ProgressoComponent],
  templateUrl: './painel.html',
  styleUrl: './painel.css',
})
export class PainelComponent {

}
