/*

    These basically are the main functions of the code, they control 
    the main proccesses. This function list will be imported to 
    main.js, I'll try to write them shorter as possible.

*/

function AddNewEmploy(list, newEmploy) {
    
    let newList;

    newList = list.push(newEmploy);
    return newList;
}

function makeNewEmploy(nm, job, txt) {
    return {
        nome: nm,
        cargo: job,
        txt: txt,
    }
}
