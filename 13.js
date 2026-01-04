//gerando funcao que adicionna jogador:
function adicionarJogador (array, nome, idade, posicao, pontuacao) {

    //definindo o objeto jogador:
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    //adicionando o jogador ao array;
    array.push(jogador);

    return array;
}

//gerando funcao que busca por posicao:
function buscarPorPosicao (array, posicao) {

    //gerando variavel para armazenar jogadores de uma posicao:
    const jogadores = []

    //percorrendo o time em busca de jogadores da posicao:
    for (let elemento of array){

        //comparando se a posicao é a mesma que a digitada pelo usuario:
        if (elemento.posicao === posicao) jogadores.push(elemento.nome);
    }

    //retornando caso tenha alguem na lista:
    if (jogadores.length > 0) return jogadores;

    //caso nao haja ninguém na lista:
    else return "Não há jogadores nessa posição.";
}

//gerando funcao que imprime o time:
function listaTime (array){

    console.log ("\n---TIME---");

    //fazendo um loop para isso:
    for (let i = 0; i < array.length; i++){
        console.log(array[i].nome);
    }
}

//gerando funcao para calcular pontuacao media:
function calcularPontuacaoMedia (array){

    //definindo variavel:
    let media = 0;

    for (let i = 0; i < array.length; i++){
        media += array[i].pontuacao;
    }

    media /= array.length;

    return media;
}

//fazendo uma funcao para o menu:
function ShowMenu () {

    //geracao de variavel:
    let opcoes;

    console.log("\n---OPCOES---");
    console.log("1 - Adicionar jogador:");
    console.log("2 - Buscar por posição:");
    console.log("3 - Listar Time:");
    console.log("4 - Calcular pontuação média:");
    console.log("5 - Sair:");
    opcoes = Number(prompt ("Escolha uma das opções"));

    return opcoes;
}


//geracao de varieveis:
const time = [];
let opcao = 6;

//criando nosso loop:
while (opcao !== 5){

    opcao = ShowMenu();

    //fazendo um switch case para cada uma das opcoes:
    switch (opcao){

        case 1:
            let nome = prompt ("Digite o nome do jogador:");
            let idade = Number (prompt ("Digite a idade do jogador:"));
            let posi = prompt ("Digite a posicao do jogador:");
            let pontuacao = Number (prompt ("Digite a pontuação do jogador:"));
            adicionarJogador (time, nome, idade, posi, pontuacao);
            break;
        
        case 2:
            let posicao = prompt ("Digite a posicao a ser buscada:");
            alert (buscarPorPosicao (time, posicao));
            break;
        
        case 3:
            listaTime(time);
            break;
        
        case 4:
            alert(`A pontuacao média é: ${calcularPontuacaoMedia(time)}`);
            break;

        case 5:
            alert ("Fechando programa.");
            break;

    }
}