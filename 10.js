//fazendo uma funcao para exibir o menu:
function ShowMenu (lista) {

    //geracao de variavel:
    let opcoes;

    //menu em si:
    console.log ("\n---LISTA---");

    //percorrendo a fila para exibir a lista:
    for (let i = 0; i < lista.length; i++){
        console.log(`${i+1}º ${lista[i]}`);
    }

    console.log("\n---OPCOES---");
    console.log("1 - Novo Cliente:");
    console.log("2 - Atender Cliente:");
    console.log("3 - Sair:");
    opcoes = Number(prompt ("Escolha uma das opções"));

    return opcoes;
}

//fazendo uma funcao para a primeira opcao:
function OptionOne (lista){

    //inserindo o cliente à lista:
    lista.push(prompt("Digite o nome do novo cliente:"));

    return lista;
}

//fazendo uma funcao para a segunda opcao:
function OptionTwo (lista){

    //caso de a lista estar vazia:
    if (lista.length === 0) alert("Não há ninguém na fila.");

    //caso de ter pessoas na fila:
    else{
        let atual = lista.shift();
        alert (`O cliente ${atual} está sendo atendido agora.`);
    }

    return lista;
}

//gerando variaveis:
const lista = [];
let opcao = 5;

//criando nosso loop:
while (opcao !== 3){
    opcao = ShowMenu(lista);

    //fazendo um switch case para cada uma das opcoes:
    switch (opcao){

        case 1:
            OptionOne(lista);
            break;
        
        case 2:
            OptionTwo(lista);
            break;
        case 3:
            alert ("Fechando programa.");
            break;

    }
}