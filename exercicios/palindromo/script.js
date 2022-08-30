var envioPalavra = document.getElementById("envioPalavra");
envioPalavra.addEventListener("click", Palindromo);

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
	}
	return newString;
}

function Palindromo() {
    let palavra = document.getElementById('campoPalavra').value;
    let palavraInvertida = inverter(palavra);

    if (palavra == palavraInvertida)
        document.write("A palavra " + palavra + "é um palíndromo")
    else
	document.write("A palavra " + palavra + "não é um palíndromo")
}

