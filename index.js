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
