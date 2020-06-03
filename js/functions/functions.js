/*

    These basically are the main functions of the code, they control 
    the main proccesses. This function list will be imported to 
    main.js, I'll try to write them shorter as possible.

*/

function makeList() {
    
    let lista = [];
    return lista;
}

function makeNewEmploy(nm, job, txt, id_gerado) {
    return {
        id: id_gerado,
        nome: nm,
        cargo: job,
        txt: txt,
    }
}

function makeId() {
  return 'A' + Math.random().toString(36).substr(2, 9);
}

function addNewEmploy(list, newEmploy) {
    
    let newList = list;

    newList.push(newEmploy);
    return newList;
}

function deleteEmploy(list, name) {
    return list.find( person => person.nome === name);
}

let lista = makeList();

let gustavo = makeNewEmploy('Gustavo', 'Engenheiro de Software', 'Lorem Ipsum', makeId()),
yan = makeNewEmploy('Yan', 'Engenheiro fr Software', 'Lorem Ipsum', makeId());
ivan = makeNewEmploy('Ivan', 'Engenheiro fr Software', 'Lorem Ipsum', makeId());

addNewEmploy(lista, yan);
addNewEmploy(lista, ivan);
addNewEmploy(lista, gustavo);

console.log(lista);

console.log(deleteEmploy(lista, 'Ivan'));
