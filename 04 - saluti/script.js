/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function saluto (nome){
    console.log ("Ciao " + nome + "!"); 
}

// Invoca la funzione qui e stampa il risultato in console
const nome = prompt("Inserisci la persona da salutare");
saluto (nome);

//Risultato atteso se si passa 'Mario': // ciao Mario