//criacao da funcao:
function sequenciaFibonacci (n) {

    //casos triviais:
    if (n <= 1) return n;

    else return sequenciaFibonacci (n-1) + sequenciaFibonacci(n-2);
}

//definindo variavel:
let inteiro = 0.1;

//pedindo numero inteiro:
while (!Number.isInteger(inteiro)){
    inteiro = Number (prompt ("Digite um numero inteiro:"))
}

for (let i = 0; i < inteiro; i++){
    console.log (`${sequenciaFibonacci(i)}`);
}