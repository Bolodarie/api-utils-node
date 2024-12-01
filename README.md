# api-utils-node
An API built with new features, designed to test and enhance my skills in Node.js and JavaScript. It includes a variety of functionalities to explore and improve my understanding of backend development, API design, and handling different types of data processing

--------------------------------------------------------------------------------------------------------------------------------------

AppModule - NestJS Module
This is the AppModule for a NestJS application. It sets up a basic structure by defining a controller and a service.

Key Parts:
DesafioController: Handles incoming HTTP requests.
DesafioService: Contains the business logic for the application.
How it works:
The @Module decorator registers the DesafioController and DesafioService.
controllers: Specifies the controller that will manage routes.
providers: Specifies the service that will handle the logic.
This module is the main part of the application that ties everything together.

Usage:
You would typically import and use this AppModule in your main application file to start the NestJS app.

--------------------------------------------------------------------------------------------------------------------------------------

DesafioController - NestJS Controller
This is the DesafioController for the NestJS application. It handles different routes and delegates the logic to the DesafioService.

Key Functions:
contarPalavras: Receives a sentence (frase) and uses the service to count the number of occurrences of each word.
validarCpfAssincrono: Validates a CPF asynchronously based on the given cpf parameter.
reverterTexto: Reverses a given text (texto) asynchronously with a delay.
realizarOperacoesArrays: Performs operations on an array of numbers (numeros), like sum, max, and min.
realizarOperacoesPrimitivas: Performs basic arithmetic operations (addition, subtraction, multiplication, and division) on two numbers (a, b).
How it works:
The DesafioController exposes multiple API routes that call methods from the DesafioService to handle business logic.
Each method receives input data via HTTP request parameters or body, performs the necessary operation, and returns the result as a response.

--------------------------------------------------------------------------------------------------------------------------------------

Key Functions:
contarPalavras(frase):

Takes a sentence (frase) and returns the count of each word's occurrences.
validarCpfAssincrono(cpf):

Validates a CPF asynchronously using a regular expression. Simulates an asynchronous check with a delay.
reverterTextoComDelay(texto):

Reverses the given text (texto) with a delay of 1.5 seconds before returning the result.
operacoesComArrays(numeros):

Performs operations on an array of numbers (numeros), including summing all numbers, finding the maximum, and the minimum.
operacoesComPrimitivos(a, b):

Performs basic arithmetic operations on two primitive values (a and b): addition, subtraction, multiplication, and division (with error handling for division by zero).
How it works:
Each method performs a specific task, such as counting words, validating data, or handling arithmetic and array operations.
Methods like validarCpfAssincrono and reverterTextoComDelay use setTimeout to simulate asynchronous operations.

--------------------------------------------------------------------------------------------------------------------------------------

Main Application - NestJS with Express Integration
This is the main entry point for the NestJS application using Express. It bootstraps the application, manually sets up routes, and integrates the DesafioController to handle various API endpoints.

Key Steps:
NestFactory.create(AppModule): Initializes the NestJS application with the root module (AppModule), which holds the overall app structure.
Manual Route Setup: The routes are manually defined using Express (app.use), where each route corresponds to a method in the DesafioController.
POST /desafios/contar-palavras: Calls the contarPalavras method to count word occurrences in a sentence.
GET /desafios/validar-cpf-assincrono/:cpf: Validates a CPF asynchronously using the validarCpfAssincrono method.
GET /desafios/reverter-texto/:texto: Reverses a given text using the reverterTexto method.
POST /desafios/operacoes-arrays: Performs operations on an array of numbers (sum, max, min) using the operacoesComArrays method.
POST /desafios/operacoes-primitivas: Performs arithmetic operations (addition, subtraction, multiplication, division) using the operacoesComPrimitivos method.
Express Middleware: The application uses Express middleware to parse incoming requests with JSON bodies (app.use(express.json())).
Application Listening: The application listens on port 3332 for incoming requests.
How it works:
Express and NestJS Integration: The app manually configures routes with Express, but still uses the NestJS module system. This allows for the flexibility of Express with the structure and features of NestJS.
Controller Integration: The DesafioController is instantiated manually to handle the routes, demonstrating how to connect controllers to Express routes in a NestJS app.
Usage:
After starting the application, you can access the API at http://localhost:3332 to interact with the different endpoints for challenges.

--------------------------------------------------------------------------------------------------------------------------------------

Desafio API - Express
This is a simple Express API with multiple routes for different challenges. The API includes endpoints for counting word occurrences, validating CPF asynchronously, reversing text, performing operations on arrays, and working with primitive values.

API Endpoints:
GET /

Description: Returns a welcome message.
Response: Bem-vindo à API de Desafios!
POST /contar-palavras

Description: Takes a sentence (frase) and counts the occurrences of each word.
Request body:
  { "frase": "exemplo de frase" }
Response:
  { "resultado": { "exemplo": 1, "de": 1, "frase": 1 } }
GET /validar-cpf-assincrono/:cpf

Description: Validates a CPF asynchronously.
Request parameter: cpf (in the format xxx.xxx.xxx-xx)
Response:
json
Copiar código
{ "resultado": "CPF válido" }
GET /reverter-texto/:texto

Description: Reverses the given text (texto).
Request parameter: texto
Response:
  { "resultado": "textorevertido" }
POST /operacoes-arrays

Description: Performs operations on an array of numbers (sum, max, and min).
Request body:
  { "numeros": [1, 2, 3, 4, 5] }
Response:
  { "soma": 15, "maiorNumero": 5, "menorNumero": 1 }
POST /operacoes-primitivas

Description: Performs basic arithmetic operations (addition, subtraction, multiplication, division) on two numbers.
Request body:
  { "a": 10, "b": 5 }
Response:
  { "soma": 15, "subtracao": 5, "multiplicacao": 50, "divisao": 2 }
How it works:
Express Routes: This application sets up routes to handle different types of requests (GET and POST). Each route performs a specific task, such as counting words or validating CPF numbers.
JSON Requests & Responses: The API uses JSON for both input and output, making it easy to integrate with other systems.
Server: The server listens on port 3000 and provides the described functionality.

To run the application locally:
Clone the repository or download the code.
Install dependencies:
  ´npm install´
Start the server:
  ´npm start´
The application will be running on http://localhost:3000.
