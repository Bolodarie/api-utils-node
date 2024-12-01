const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const express = require('express');
const { DesafioController } = require('./desafio.controller');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Adicionando o DesafioController manualmente à aplicação Express
  const desafioController = new DesafioController();
  
  // Definindo as rotas manualmente
  app.use(express.json()); // Para analisar requisições JSON

  app.post('/desafios/contar-palavras', (req, res) => desafioController.contarPalavras(req, res));
  app.get('/desafios/validar-cpf-assincrono/:cpf', (req, res) => desafioController.validarCpfAssincrono(req, res));
  app.get('/desafios/reverter-texto/:texto', (req, res) => desafioController.reverterTexto(req, res));
  app.post('/desafios/operacoes-arrays', (req, res) => desafioController.realizarOperacoesArrays(req, res));
  app.post('/desafios/operacoes-primitivas', (req, res) => desafioController.realizarOperacoesPrimitivas(req, res));

  // Rodando a aplicação na porta 3000
  //await app.listen(3332);
}

bootstrap();
