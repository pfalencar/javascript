function trocaImagem() {
	document.getElementById("myImage").src="img/html-logo.png";
}

function imagemTroca() {
	document.getElementById("myImage").src="img/js-logo.png";
}

function trocaFonte() {
	document.getElementById("demo").style.fontSize="35px";
}

function fonteTroca() {
	document.getElementById("demo").style.fontSize="13px";
}

function ocultarElemento() {
	document.getElementById("demo").style.display="none";
}

function naoOcultarElemento() {
	document.getElementById("demo").style.display="block";
}

function ocultarMostrar() {
	var x = document.getElementById("demo");
	if ( x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display ="none";
	}
}

function calcular() {
	document.getElementById("demo").innerHTML = 10 + 5;
}