function authors (array){

    //criacao da nossa variavel:
    const autores = [];

    //percorrendo nosso array:
    for (let i = 0; i < array.length; i++){

        //percorrendo os livros de cada categoria:
        for (let livros of array[i].books){

            //checando se o autor ja nao esta na lista:
            if (!autores.includes(livros.author)) autores.push(livros.author);
        }
    }

    //retornando:
    return autores;
}