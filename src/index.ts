import { fibonacciSequence } from './exercises/fibonacci-sequence';
import { latterChecker } from './exercises/latter-checker';
import { sun } from './exercises/sun';

console.log('Main Start\n');

// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const sequence = fibonacciSequence(5);
console.log(sequence);

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

const checker = latterChecker('Aqui tem a letra A');
console.log(checker);

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

const result = sun();
console.log(`o valor da variável SOMA é ${result}`);
