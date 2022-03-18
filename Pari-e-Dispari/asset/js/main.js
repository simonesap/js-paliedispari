// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

let bottonePari = document.getElementById('pari');
let bottoneDispari = document.getElementById('dispari');

bottonePari.addEventListener('click',
    function() {
        let numeroUtentePari = Number(prompt('Inserisci un numero da 1 a 5'));
        console.log(numeroUtentePari);
}   
)

bottoneDispari.addEventListener('click',
    function() {
        let numeroUtenteDispari = Number(prompt('Inserisci un numero da 1 a 5'));
        console.log(numeroUtenteDispari);
    }
)