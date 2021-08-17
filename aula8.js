// Números
var idade = 18;
var gols = 20000000000;
var pi = 3.14;
var exp = 2e10;

// Operadores Aritméticos
var soma = 100 + 50 // 150
var subtracao = 100 - 50 // 50
var multiplicacao = 100 * 2 // 200
var divisao = 100 / 2 // 50
var expoente = 2 ** 4 // 16
var modulo = 14 % 5 // 4

// NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

//A ordem da operação aritmética importa!
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores aritméticos unários

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28
-idade; // -28

console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Operador Lógico de Negação (!)
// !true é igual a false

if(!true) // false
if(!1) // false
if(!'') // true
if(!!' ') // true
if(!(!'')) // false
if(!undefined) // true

// tipos undefined e null
var undef = undefined;
var nuuu = null;
if(undef == null)
  console.log(undef);

// Operador Lógico &&

true && true // true 
true && false // false
false && true // false
// 'Gato' && 'Cão'; // Cão
(5 - 5) && (5 + 5) // 0 
// 'Gato' && false // false
(5 >= 5) && (3 < 6) // true

// Operador Lógico ||

true || true // true
true || false // true
false || true // true
'Gato' || 'Cão' // 'Gato'
(5 - 5) || (5 + 5) // 10
'Gato' || false // 'Gato'
(5 >= 5) || (3 < 6) // true

//Operadores de comparação

10 > 5; // true
5 > 10; // false
20 < 10; //false
10 <= 10; // true
10 >= 11; //false

// usado o operador == e ===
10 == '10'; //true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10' // false
10 !== '10' // true

// operadores de atribuição

var x = 5;
var y = 10;
console.log(x**y);
x += y; // x = x + y (15)
y -= x; // y = y - x (5)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y ()

// Boolean e Condicionais
// Retornam false
if(false)
if(0)
if(NaN)
if(null)
if(undefined)
if('')
if("")
if(``)

// Retornam true

if(true)
if(1)
if(' ')
if('vinicuis')
if(-5)
if({nome:'gerson'})
if({})

// Condicionais IF e ELSE
var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui Graduação');
} else {
  console.log('Não possui Graduação');
}

// Condicional ELSE IF

var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui nada');
}

// SWITCH

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol, metinra, não olhe');
    break;
  default:
    console.log('Felhe os olhos');
}

// Operadore ternários

var idade = 19;
var podeBeber;
//sem o operador ternário
if(idade >= 18) {
  podeBeber = 'Pode beber';
} else {
  podeBeber = 'Não pode beber';
}
// com o operador ternário
podeBeber = (idade >= 18) ? 'Pode beber':'Não pode beber';

// Estruturas de repetição
//FOR
for (var i = 0; i > 10; i++){
  // executa o bloco de código
}
//FOR IN
var arr = [1,2,3];
for(var n in arr){
  console.log(n);
}
// FOREACH
arr.forEach(function(each){
  console.log(each);
});

// WHILE

var x = true;
while(x) {
  console.log('HELLO WORLD');
  x = false;
}

// DO WHILE
do {
  console.log('HELLO WORLD2');
} while(false);

// Funções

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

//parâmetros e argumentos

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80); // 80 e 1.80 são os argumentos
imc(60, 1.70); // 60 e 1.70 são os argumentos

addEventListener('click', function(){
  console.log('Clicou');
});
// Funções anônimas
{
  var seila = 10;
}

() => {
  var seila2 = 1111;
}


function corFavorita1(cor) {
  if(cor === 'Azul') {
    return 'Você gosta do céu';
  } else if (cor === 'Verde') {
    return 'Você gosta do mato';
  } else {
    return 'Você não gosta de nada';
  }
}

console.log(corFavorita1()); // retorna 'Você não gosta de nada'

function imc2(peso, altura) {
  const imc = peso / (altura**2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o valor do imc
console.log(imc2(80, 1.80));// retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number'){
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return 0;
  }
}

// Escopo da função

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

// console.log(totalPaises);

var profissao = 'Programador';

function dados() {
  var nome = 'Gerson';
  var idade = 29;
  function outrosDados() {
    var endereco = 'Recife';
    var idade = 10;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna Gerson, 10, Recife, Programador
// console.log(outrosDados());// retorn um erro