//definindo variaveis:
let inteiro = 0.1;
let palavra = "";

//pedindo numero inteiro:
while (!Number.isInteger(inteiro)){
    inteiro = Number (prompt ("Digite um numero inteiro:"))
}

//caso o numero seja divisivel por 3:
if (inteiro % 3 == 0) palavra += "fizz";

//caso o numero seja divisivel por 5:
if (inteiro % 5 == 0) palavra += "buzz";

//caso a palavra exista:
if (palavra) console.log(palavra);