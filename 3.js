//criacao da funcao:
function verificarIdades (array){

    //definicao de variaveis:
    let anoAtual = prompt("Digite o ano atual: ");
    let maioridade = []

    //percorrendo o array todo para analisar caso a caso:
    for (let i = 0; i < array.length ; i++){
    
        //calculando idade:
        let idade = anoAtual - array[i];

        switch (true){

            //caso de a pessoa ser maior de idade:
            case (idade >= 18):
                maioridade.push ("maior");
                console.log (`Pessoa ${i + 1}: Maior de idade.`);
                break;
            
            //caso de a pessoa ser menor de idade:
            case (idade < 18):
                maioridade.push ("menor");
                console.log (`Pessoa ${i + 1}: Menor de idade.`);
                break;
        }
    }
    return maioridade;
}