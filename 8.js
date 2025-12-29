function countBooksInCategory (array) {

    //criacao do nosso objeto:
    let objeto = {};

    //percorrendo nosso array e preeenchendo o objeto:
    for (let i = 0; i < array.length; i++){
        objeto[array[i].category] = array[i].books.length;
    }

    //retornando o objeto:
    return objeto;
}
