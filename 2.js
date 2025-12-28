//Funcao recursiva para calculo de fatorial:
function CalculoFatorial (numero){
    if (numero == 0)
        return 1;
    else
        return numero * CalculoFatorial(numero-1);
}

//definicao de variaveis:
let numero, fatorial;
let loop = "S";

//definicao do nosso loop:
while (loop.toUpperCase() == "S"){
    
    numero = Number(prompt ("Digite um número inteiro positivo:"));

    //Aqui calculamos o fatorial caso as condicoes sejam satisfeitas:
    if (numero > 0 && Number.isInteger(numero)){
        fatorial = CalculoFatorial (numero);
        console.log (`O fatorial de ${numero} é: ${fatorial}`);
        loop = prompt ("Deseja continuar e calcular outro fatorial?");
    }

    //Caso das condicoes nao serem satisfeitas:
    else
        console.log ("Numero invalido, digite outro");
}