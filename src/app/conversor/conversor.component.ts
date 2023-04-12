import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  unidade1: string="";
  unidade2: string="";
  unidade3: string="";
  valor1: number=0;
  valor2: number=0;
  valor3: number=0;

  converter() {
    // Conversão da Unidade 1
    if (this.unidade1 === 'celsius') {
      this.valor2 = this.valor1 * 1.8 + 32; // Celsius para Fahrenheit
    } else if (this.unidade1 === 'fahrenheit') {
      this.valor2 = (this.valor1 - 32) / 1.8; // Fahrenheit para Celsius
    } else if (this.unidade1 === 'kelvin') {
      this.valor2 = this.valor1 - 273.15; // Kelvin para Celsius
    }

    // Conversão da Unidade 2
    if (this.unidade2 === 'metros') {
      this.valor3 = this.valor2 * 1000; // Metros para Quilômetros
    } else if (this.unidade2 === 'quilometros') {
      this.valor3 = this.valor2 / 1.609; // Quilômetros para Milhas
    } else if (this.unidade2 === 'milhas') {
      this.valor3 = this.valor2 * 1.609; // Milhas para Quilômetros
    }

    // Conversão da Unidade 3
    if (this.unidade3 === 'quilogramas') {
      this.valor3 = this.valor3 / 1000; // Gramas para Quilogramas
    } else if (this.unidade3 === 'gramas') {
      this.valor3 = this.valor3 * 1000; // Quilogramas para Gramas
    } else if (this.unidade3 === 'libras') {
      this.valor3 = this.valor3 / 0.453592; // Libras para Quilogramas
    }

    // Realiza a conta para obter o valor final
    const resultado = this.valor1 * this.valor2 * this.valor3;
    console.log(`O resultado da conta é: ${resultado}`);
  }
}
