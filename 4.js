//definicao de variaveis:
let reais = Number (prompt ("Quantos reais voce tem?"));
let dolares = (reais/5.7).toFixed(2);
let euros = (reais/6.1).toFixed(2);

//impressao:
console.log (`Voce tem R$${reais}, que sao $${dolares} e €${euros}`);