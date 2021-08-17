// resolvam
// criem um fork deste repositorio e resolvam esta atividade

// Função recebe como parâmetro um valor numérico x
// e retorna o seu quadrado.
function retornaQuadrado(base){
  return base ** 2;
}

function retornaResto(dividendo, divisor){
  return dividendo % divisor;
}

// 24 = retornaQuadrado(x) - retornaResto(x,y)
// 24 =         36         - 
// 24 - 36 = retornaResto(6,72)

// Função recebe como parâmetro as funções retornaQuadrado e retornaResto
// e retorna o resultado da subtração entre os valores retornados por estas funções, respectivamente.
let valor1 = 6, valor2 = 60;

function retornaValor(a,b){
  console.log(a(valor1)-b(valor1,valor2));
}

retornaValor(retornaQuadrado, retornaResto);