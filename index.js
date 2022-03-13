// const lines = prompt("Qual os valores?").split(' ');
// let [a, b] = lines.map(Number);

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

const lines = prompt("Digite os dados").split(' ');
let [c1, n1, v1] = lines.shift().split(' ');
let [c2, n2, v2] = lines.shift().split(' ');

let p1 = parseFloat(n1) * parseFloat(v1);
let p2 = parseFloat(n2) * parseFloat(v2);

console.log("VALOR A PAGAR: R$ ", (p1 + p2).toFixed(2));

// 1001
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b] = lines.map(Number);

var x = a + b;

console.log("X = " + x);
*/

// 1002
/*
  var input = require('fs').readFileSync('/dev/stdin', 'utf8');

  let PI = 3.14159;
  let raio = parseFloat(input);

  let area = PI * Math.pow(raio, 2)

  console.log("A=" + area.toFixed(4));
*/

// 1003
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b] = lines.map(Number);
var soma = a + b;

console.log("SOMA = " + soma);

*/

// 1004
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [a, b] = lines.map(Number);
var PROD = a * b;

console.log("PROD = " + PROD)

*/

// 1005
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b] = lines.map(item => parseFloat(item));

let somaPeso = 3.5 + 7.5;
let media = (a * 3.5 + b * 7.5) / somaPeso;

console.log("MEDIA = " + media.toFixed(5));
*/

// 1006
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines.map(item => parseFloat(item));

let somaPeso = 2 + 3 + 5;

let media = ((a * 2) + (b * 3) + (c * 5)) / somaPeso;

console.log("MEDIA = " + media.toFixed(1));

*/

// 1007
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c, d] = lines.map(Number);

let DIFERENCA = a * b - c * d;

console.log("DIFERENCA = " + DIFERENCA);
*/

// 1008
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [n, h, vh] = lines.map(item => parseFloat(item));
let salary = vh * h;

console.log("NUMBER = " + n);
console.log("SALARY = U$ " + salary.toFixed(2));

*/

// 1009
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [name, fixedSalary, salesAmount] = lines;

let commission = parseFloat(salesAmount) * 0.150;

let total = parseFloat(fixedSalary) + commission;

console.log("TOTAL = R$ " + total.toFixed(2));

*/

// 1010
/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [c1, n1, v1] = lines.shift().split(' ');
let [c2, n2, v2] = lines.shift().split(' ');

let p1 = parseFloat(n1) * parseFloat(v1);
let p2 = parseFloat(n2) * parseFloat(v2);

console.log("VALOR A PAGAR: R$", (p1 + p2).toFixed(2));
*/

// 1011
/*

*/

// 1012
/*

*/
