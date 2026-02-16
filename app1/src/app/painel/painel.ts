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
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase 

  public progresso: number = 0

  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarReposta(): void {
    console.log(this.tentativas)
    if(this.rodadaFrase.frasePtbr == this.resposta) {

      alert('A tradução está correta')
      
      // Trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      // Atualiza o objeto rodadaFrase
      this.atualizaRodada()
      
    } else {

      //Diminuir a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        alert('Você perdeu todas as tentativas')
      }
    }
    console.log(this.tentativas)
  }

  public atualizaRodada(): void {

    // Define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    // Limpa a reposta
    this.resposta = ''
  }
}
