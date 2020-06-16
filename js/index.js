import * as Functions from './Functions/functions';

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


Functions.addNewEmploye(lista, yan);
Functions.addNewEmploye(lista, ivan);
Functions.addNewEmploye(lista, gustavo);

console.log(lista);