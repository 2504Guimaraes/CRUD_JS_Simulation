/*

    These basically are the main functions of the code, they control 
    the main proccesses. This function list will be imported to 
    main.js, I'll try to write them shorter as possible.

*/

// function makeList() {
    
//     let lista = [];
//     return lista;
// }

// function makeNewEmploye(nm, job, txt, id_gerado) {
//     return {
//         id: id_gerado,
//         nome: nm,
//         cargo: job,
//         txt: txt,
//     }
// }

// function makeId() {
//   return 'A' + Math.random().toString(36).substr(2, 9);
// }

// function addNewEmploye(list, newEmploye) {
    
//     let newList = list;

//     newList.push(newEmploye);
//     return newList;
// }

// function deleteEmploye(list, name) {

//   list.forEach((x, index) => {
//     if (x === list.find( person => person.nome === name)) {
//       list.splice(index, 1);
//     }
//   })
  
//   return list;
// }

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

export function makeList() {
    
  let lista = [];
  return lista;
}

export function makeNewEmploye(nm, job, txt, id_gerado) {
  return {
      id: id_gerado,
      nome: nm,
      cargo: job,
      txt: txt,
  }
}

export function makeId() {
return 'A' + Math.random().toString(36).substr(2, 9);
}

export function addNewEmploye(list, newEmploye) {
  
  let newList = list;

  newList.push(newEmploye);
  return newList;
}

export function deleteEmploye(list, name) {

  list.forEach((x, index) => {
    if (x === list.find( person => person.nome === name)) {
      list.splice(index, 1);
    }
  })

  return list;
}