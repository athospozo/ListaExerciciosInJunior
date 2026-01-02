//funcao que averigua quantos pares estao em ordem crescente:
function CrescentNumbers (array) {

    //definicao de variavel:
    let crescentes = 0;

    //vamos percorrer o array averiguando:
    for (let i = 1; i < array.length; i++){

        //comparando o numero atual com o ultimo e incrementando caso maior:
        if (array[i] > array[i - 1]) crescentes ++;
    }
    return crescentes;
}

//definicao de variaveis:
let quantidade = Number (prompt ("Digite a quantidade de numeros que vai inserir no vetor: "))
const vetor = [];

//preenchendo o vetor:
for (let i = 0; i < quantidade; i++){
    vetor[i] = prompt ("Digite o numero que deseja comparar:");
}

//impressao da quantidade de ppares crescentes:
console.log (CrescentNumbers(vetor));