/*

    These basically are the main functions of the code, they control 
    the main proccesses. This function list will be imported to 
    main.js, I'll try to write them shorter as possible.

*/

function makeList() {
    let lista = [];
    return lista;
}

function makeNewEmploy(nm, job, txt) {
    return {
        nome: nm,
        cargo: job,
        txt: txt,
    }
}

function AddNewEmploy(list, newEmploy) {
    
    let newList;

    newList = list.push(newEmploy);
    return newList;
}

let lista = makeList();

let gustavo = makeNewEmploy('Gustavo', 'Engenheiro de Software', 'Lorem Ipsum'),
ivan = makeNewEmploy('121', '121', '121');

