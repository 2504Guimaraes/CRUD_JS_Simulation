import * as Functions from './Functions/functions';

// let lista = makeList();

// let gustavo = makeNewEmploye('Gustavo', 'Engenheiro de Software', 'Lorem Ipsum', makeId()),
//     yan = makeNewEmploye('Nathalia', 'Engenheiro fr Software', 'Lorem Ipsum', makeId()),
//     ivan = makeNewEmploye('Ivan', 'Engenheiro fr Software', 'Lorem Ipsum', makeId());

// addNewEmploye(lista, yan);
// addNewEmploye(lista, ivan);
// addNewEmploye(lista, gustavo);

// console.log(lista);

// console.log('\nLista com Usuário Ivan apagado: \n');

// console.log(deleteEmploye(lista, 'Gustavo'));

let lista = Functions.makeList();

let gustavo = Functions.makeNewEmploye(
    'Gustavo', 
    'Analista de Banco de Dados', 
    'Lorem Ipsum',
    Functions.makeId()),

    yan = Functions.makeNewEmploye(
    'Yan', 
    'Desenvolvedor Back-End',
    'Lorem Ipsum', 
    Functions.makeId()),
    
    ivan = Functions.makeNewEmploye(
    'Ivan', 
    'Desenvolvedor Front-End',
    'Lorem Ipsum', 
    Functions.makeId());


Functions.addNewEmploye(yan);
Functions.addNewEmploye(ivan);
Functions.addNewEmploye(gustavo);

console.log(lista);