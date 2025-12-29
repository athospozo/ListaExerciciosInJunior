//funcao palindromo:
function verificarPalindromo (string){

    //geracao de variavel:
    let tamanho = string.length;

    //percorrendo a string simultaneamente de tra para frente até a metade e comparando:
    for (let i = 0; i < Math.floor(tamanho/2); i++){

        //caso a condicao nunca seja satisfeita é um palindromo:
        if (string[i] !== string[tamanho - (i+1)]) return false;
    }
    
    return true;
}

//gerando variaveis:
let frase = (prompt ("Digite uma frase a fim de saber se é um palindromo:")).toLowerCase();
let processada;

//unindo a frase de modo a ignorar os espaços:
processada = frase.split(" ");
frase = ""
for (let partes of processada){
    frase += partes;
}

//caso de ser palindromo:
if (verificarPalindromo (frase)) console.log("É palindromo");
//caso de nao ser palindromo:
else console.log ("Não é palindromo");