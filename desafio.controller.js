const { Injectable } = require('@nestjs/common');
const { DesafioService } = require('./desafio.service');

class DesafioController {

  constructor() {
    this.desafioService = new DesafioService();
  }

  async contarPalavras(req, res) {
    const { frase } = req.body;
    const resultado = await this.desafioService.contarPalavras(frase);
    res.send(resultado);
  }

  async validarCpfAssincrono(req, res) {
    const { cpf } = req.params;
    const resultado = await this.desafioService.validarCpfAssincrono(cpf);
    res.send(resultado);
  }

  async reverterTexto(req, res) {
    const { texto } = req.params;
    const resultado = await this.desafioService.reverterTextoComDelay(texto);
    res.send(resultado);
  }

  async realizarOperacoesArrays(req, res) {
    const { numeros } = req.body;
    const resultado = this.desafioService.operacoesComArrays(numeros);
    res.send(resultado);
  }

  async realizarOperacoesPrimitivas(req, res) {
    const { a, b } = req.body;
    const resultado = this.desafioService.operacoesComPrimitivos(a, b);
    res.send(resultado);
  }
}

module.exports = { DesafioController };
