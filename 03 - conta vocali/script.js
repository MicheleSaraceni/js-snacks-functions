/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function cercavocali (stringa){
    let nvocali = 0;
    for (i = 0; stringa.length > i; i++){
        if(stringa[i].toLowerCase() === "a" || stringa[i].toLowerCase() === "e" || stringa[i].toLowerCase() === "i" || stringa[i].toLowerCase() === "o" || stringa[i].toLowerCase() === "u"){
            console.log("Trovata vocale: " + stringa[i] + " in " + i + " posizione.");
            nvocali++;
            }
        }
    return nvocali;
}

// Invoca la funzione qui e stampa il risultato in console

const n = cercavocali (word);
console.log("Il numero di vocali presenti è: " + n);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)