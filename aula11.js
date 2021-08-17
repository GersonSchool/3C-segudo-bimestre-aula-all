// 1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function question1(text) {
	return `Olá ${text} !`;
}
// 2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação e divisão desses valores, dependendo da função Callabck.
function question2(valor1, valor2, callabck) {
	console.log(callabck(valor1, valor2));
}
question2(12, 3, function (v1, v2) {
	return v1 - v2;
});
// 3 – Crie uma função que recebe um parametro e uma callback que retorna uma outra função que recebe um parametro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.
function question3(valor1, callabck) {
	return function (valor2) {
		callabck(valor1, valor2);
	};
}
var v1 = question3(15, function (valor1, valor2) {
	console.log(valor1);
	console.log(valor2);
});
v1(9);
