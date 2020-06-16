/*

    These basically are the main functions of the code, they control 
    the main proccesses. This function list will be imported to 
    main.js, I'll try to write them shorter as possible.

*/

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

export function addNewEmploye(list, employe) {

  list.push(employe);
  return list;
}

export function deleteEmploye(list, id) {

  list.forEach((x, index) => {
    if (x === list.find( person => person.id === id)) {
      list.splice(index, 1);
    }
  })
  
  return list;
}