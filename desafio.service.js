class DesafioService {

    // Desafio 1: Contar ocorrências de palavras
    async contarPalavras(frase) {
      const palavras = frase.split(' ');
      const contador = palavras.reduce((acc, palavra) => {
        acc[palavra] = (acc[palavra] || 0) + 1;
        return acc;
      }, {});
      
      return `Ocorrências: ${JSON.stringify(contador)}`;
    }
  
    // Desafio 2: Validação assíncrona de CPF
    async validarCpfAssincrono(cpf) {
      // Simulando uma verificação assíncrona
      return new Promise((resolve) => {
        setTimeout(() => {
          const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
          resolve(regex.test(cpf) ? 'CPF válido' : 'CPF inválido');
        }, 1000);
      });
    }
  
    // Desafio 3: Reverter texto com delay
    async reverterTextoComDelay(texto) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const textoRevertido = texto.split('').reverse().join('');
          resolve(`Texto revertido: ${textoRevertido}`);
        }, 1500);
      });
    }
  
    // Desafio 4: Realizar operações com arrays (somar, encontrar maior número, etc.)
    operacoesComArrays(numeros) {
      const soma = numeros.reduce((acc, num) => acc + num, 0);
      const maiorNumero = Math.max(...numeros);
      const menorNumero = Math.min(...numeros);
      
      return `Soma: ${soma}, Maior Número: ${maiorNumero}, Menor Número: ${menorNumero}`;
    }
  
    // Desafio 5: Operações com tipos primitivos
    operacoesComPrimitivos(a, b) {
      const soma = a + b;
      const subtracao = a - b;
      const multiplicacao = a * b;
      const divisao = b !== 0 ? a / b : 'Erro: Divisão por zero';
      
      return `Soma: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}`;
    }
  }
  
  module.exports = { DesafioService };
  