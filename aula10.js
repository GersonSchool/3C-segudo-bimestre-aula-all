// Callback
function soma(a, b, callback) {
	const result = a + b;
	callback(result);
}

function multiplica(a, b, callback) {
	const result = a * b;
	callback(result);
}

soma(1, 4, (result) => {
	console.log(`Este é o resultado da operação SOMA: ${result}`);
});
multiplica(2, 2, (result) => {
	console.log(`Este é o resultado da operação MULTIPLICA: ${result}`);
});
var cont = 0;

window.addEventListener("click", function() {
	$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon-species/",
    data: {},
    success: function (result) {
      setInterval(interval, 2000);
    },
    error: function (error) {
      console.log('deu zebra');
    },
  });
});

function interval() {
	console.log(`executando o interval ${cont++}`);
}

// setTimeout(, 5000);

// 
