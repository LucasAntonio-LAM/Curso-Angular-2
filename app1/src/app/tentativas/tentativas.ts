import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  imports: [CommonModule],
  templateUrl: './tentativas.html',
  styleUrl: './tentativas.css',
})
export class TentativasComponent {

  @Input() public tentativas!: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)
  }

  ngOnInit() {
    console.log('Tentativas recebidas do painel: ', this.tentativas)
  }
}
