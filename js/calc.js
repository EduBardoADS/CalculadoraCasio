"use strict";
window.addEventListener("load", function () {
	let btn = document.getElementById("botao");

		b1.addEventListener("click", function () {
			let num1, num2, soma;
			num1 = document.getElementById("v1").value;
			num2 = document.getElementById("v2").value;
			soma = Number(num1) + Number(num2);
			document.getElementById("resultado").value = soma;
          
        });
        b2.addEventListener("click", function () {
			let num1, num2, subtrair;
			num1 = document.getElementById("v1").value;
			num2 = document.getElementById("v2").value;
			subtrair = Number(num1) - Number(num2);
			document.getElementById("resultado").value = subtrair;
          
        });
        b3.addEventListener("click", function () {
			let num1, num2, multiplicar;
			num1 = document.getElementById("v1").value;
			num2 = document.getElementById("v2").value;
			multiplicar = Number(num1) * Number(num2);
			document.getElementById("resultado").value = multiplicar;
          
        });
        b4.addEventListener("click", function () {
			let num1, num2, dividir;
			num1 = document.getElementById("v1").value;
			num2 = document.getElementById("v2").value;
			dividir = Number(num1) / Number(num2);
			document.getElementById("resultado").value = dividir;
          
    });

});