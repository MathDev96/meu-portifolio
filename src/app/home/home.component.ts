import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private profileService: ProfileService) { }
  
  typingText: string = ''; // Texto que será exibido com o efeito de digitação
  fullText: string = 'Olá! Seja bem-vindo!'; // Texto completo
  typingSpeed: number = 100; // Velocidade da digitação em milissegundos


  ngOnInit(): void {
    this.typeWriter(); // Inicia o efeito de digitação quando o componente é carregado
  }

  typeWriter(): void {
    if (this.typingText.length < this.fullText.length) {
      this.typingText += this.fullText[this.typingText.length]; // Adiciona uma letra por vez
      setTimeout(() => this.typeWriter(), this.typingSpeed); // Chama a função novamente após um intervalo
    }
  }
}