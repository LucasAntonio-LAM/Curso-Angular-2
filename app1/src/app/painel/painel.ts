import { Component } from '@angular/core';
import { ProgressoComponent } from '../progresso/progresso';
import { TentativasComponent } from '../tentativas/tentativas';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  imports: [TentativasComponent, ProgressoComponent],
  templateUrl: './painel.html',
  styleUrl: './painel.css',
})
export class PainelComponent {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'

  constructor() { console.log(this.frases) }
}
