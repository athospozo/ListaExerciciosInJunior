//gerando funcao:
function encontrarElementoUnico (array) {

    //gerando um array de analise:
    const arrayObjetos = [];

    //percorrendo o array de parametro:
    for (let numero of array){

        //definindo mais variaveis:
        let achou = false; 
        let aux = {};

        //buscando o numero, caso o nosso array de armazenamento seja nulo pula:
        for (let i = 0; i < arrayObjetos.length; i++) {

            //checando se o elemento ja esta armazenado no array:
            if (arrayObjetos[i].elemento == numero) {
                arrayObjetos[i].vezes++; 
                achou = true;       
                break;           
            }
        }

        //caso o elemento ainda nao esteja armazenado no nosso array:
        if (!achou) {
            aux.elemento = numero;
            aux.vezes = 1;
            arrayObjetos.push(aux);
        }
    }

    //agora vamos percorrer o array objeto procurando o elemento que aparece apenas uma unica vez:
    for (let i = 0; i < arrayObjetos.length; i++){

        if (arrayObjetos[i].vezes == 1){
            console.log (encontrarElementoUnico(array));
            return arrayObjetos[i].elemento;
        }
    }
}