/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstcaracter(namesarray){
    const newarray = [];
    for (i = 0; namesarray.length > i; i++){
        newarray[i] = namesarray[i][0];
    }
    return newarray;
} 

// Invoca la funzione qui e stampa il risultato in console

const namesletter = firstcaracter(names)
console.log (namesletter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]