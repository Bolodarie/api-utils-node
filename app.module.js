
const { Module } = require('@nestjs/common');

const { DesafioController } = require('./desafio.controller');

const { DesafioService } = require('./desafio.service');

@Module({
    controllers: [DesafioController],  // Registrando o controlador
    providers: [DesafioService],       // Registrando o serviço
  })

class AppModule {};

module.exports = { AppModule };
