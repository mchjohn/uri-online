## Problems Beecrowd 🐝

<details>
  <summary>1001</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    var [a, b] = lines.map(Number);

    var x = a + b;

    console.log("X = " + x);
</details>

<details>
  <summary>1002</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');

    let PI = 3.14159;
    let raio = parseFloat(input);

    let area = PI * Math.pow(raio, 2)

    console.log("A=" + area.toFixed(4));
</details>

<details>
  <summary>1003</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    var [a, b] = lines.map(Number);
    var soma = a + b;

    console.log("SOMA = " + soma);
</details>

<details>
  <summary>1004</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    var [a, b] = lines.map(Number);
    var PROD = a * b;

    console.log("PROD = " + PROD)
</details>

<details>
  <summary>1005</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [a, b] = lines.map(item => parseFloat(item));

    let somaPeso = 3.5 + 7.5;
    let media = (a * 3.5 + b * 7.5) / somaPeso;

    console.log("MEDIA = " + media.toFixed(5));
</details>

<details>
  <summary>1006</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [a, b, c] = lines.map(item => parseFloat(item));

    let somaPeso = 2 + 3 + 5;

    let media = ((a * 2) + (b * 3) + (c * 5)) / somaPeso;

    console.log("MEDIA = " + media.toFixed(1));
</details>

<details>
  <summary>1007</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [a, b, c, d] = lines.map(Number);

    let DIFERENCA = a * b - c * d;

    console.log("DIFERENCA = " + DIFERENCA);
</details>

<details>
  <summary>1008</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [n, h, vh] = lines.map(item => parseFloat(item));
    let salary = vh * h;

    console.log("NUMBER = " + n);
    console.log("SALARY = U$ " + salary.toFixed(2));
</details>

<details>
  <summary>1009</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [name, fixedSalary, salesAmount] = lines;

    let commission = parseFloat(salesAmount) * 0.150;

    let total = parseFloat(fixedSalary) + commission;

    console.log("TOTAL = R$ " + total.toFixed(2));
</details>

<details>
  <summary>1010</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [c1, n1, v1] = lines.shift().split(' ');
    let [c2, n2, v2] = lines.shift().split(' ');

    let p1 = parseFloat(n1) * parseFloat(v1);
    let p2 = parseFloat(n2) * parseFloat(v2);

    console.log("VALOR A PAGAR: R$", (p1 + p2).toFixed(2));
</details>

<details>
  <summary>1011</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [R] = lines.map(item => parseFloat(item));
    let PI = 3.14159;
    let V = 4 / 3 * PI * Math.pow(R, 3);

    console.log("VOLUME =", V.toFixed(3));
</details>

<details>
  <summary>1011</summary>

    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    const PI = 3.14159

    var [a, b, c] = lines.shift().split(' ').map(item => parseFloat(item))

    console.log('TRIANGULO: ' + (a * c / 2).toFixed(3))
    console.log('CIRCULO: ' + (PI * (Math.pow(c, 2))).toFixed(3))
    console.log('TRAPEZIO: ' + ((a + b) * c / 2).toFixed(3))
    console.log('QUADRADO: ' + (Math.pow(b, 2)).toFixed(3))
    console.log('RETANGULO: ' + (a * b).toFixed(3))
</details>


