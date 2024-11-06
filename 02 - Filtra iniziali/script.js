/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function searchletter (array, letter){
    let newarray = [];
        for (i = 0; array.length > i; i++){
            if(array[i][0].toLowerCase() === letter.toLowerCase()){
                newarray.push(array[i]);
            }
        }
    return newarray;
}

// Invoca la funzione qui e stampa il risultato in console
const letter = prompt("Inserisci una lettera")
const inizialeuguale = searchletter (names, letter);
console.log (inizialeuguale);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]