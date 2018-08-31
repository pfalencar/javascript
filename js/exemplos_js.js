//Escrever os números de 0 a 10 com laço de repetição
var i;
for (i = 0; i <= 10; i++){
	document.write(i + "");
}

//Escrever a tabuada do 2
document.write("<br><br>");
var i;
for (i = 0; i <=10; i++){
	document.write("2 x " + i + " = " + 2*i + "<br>");
}

//Escrever as tabuadas de 3 a 10
var i;
var j;
for (i = 3; i <= 10; i++) {
	for (j = 0; j <= 10; j++) {
		document.write(i + " x " + j + " = " + j*i + "<br><br>");
	}
}