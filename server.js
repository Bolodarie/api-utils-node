const express = require('express');
const app = express();

// Adicionando uma rota para a raiz "/"
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Desafios!');
  });
  

// Rota para contar palavras
app.post('/contar-palavras', (req, res) => {
  const { frase } = req.body;
  const palavras = frase.split(' ');
  const contador = palavras.reduce((acc, palavra) => {
    acc[palavra] = (acc[palavra] || 0) + 1;
    return acc;
  }, {});
  res.json({ resultado: contador });
});

// Rota para validar CPF assincrono
app.get('/validar-cpf-assincrono/:cpf', (req, res) => {
  const cpf = req.params.cpf;
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const resultado = regex.test(cpf) ? 'CPF válido' : 'CPF inválido';
  res.json({ resultado });
});

// Rota para reverter texto
app.get('/reverter-texto/:texto', (req, res) => {
  const texto = req.params.texto;
  const textoRevertido = texto.split('').reverse().join('');
  res.json({ resultado: textoRevertido });
});

// Rota para operações com arrays
app.post('/operacoes-arrays', (req, res) => {
  const numeros = req.body.numeros;
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const maiorNumero = Math.max(...numeros);
  const menorNumero = Math.min(...numeros);
  res.json({ soma, maiorNumero, menorNumero });
});

// Rota para operações com primitivos
app.post('/operacoes-primitivas', (req, res) => {
  const { a, b } = req.body;
  const soma = a + b;
  const subtracao = a - b;
  const multiplicacao = a * b;
  const divisao = b !== 0 ? a / b : 'Erro: Divisão por zero';
  res.json({ soma, subtracao, multiplicacao, divisao });
});

// Inicializa o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
