// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

let parolaInserita = prompt('Inserisci una parola: ');
console.log(parolaInserita);

// definisco la funzione personalizzata
function inversioneStringa(str) {
    var arrayDiSottostringhe = str.split(""); // con split spezzetto la stringa sorgente in sottostringhe
    var reverseArray = arrayDiSottostringhe.reverse(); //reverse mi restituisce le stringhe in ordine inverso
    return reverseArray.join(""); // il metodo join concatena le sottostringhe in unica stringa
}

document.getElementById('box').innerHTML = `<div>Ok amico, questa è la parola da te inserita ma al contrario... Ti sembra palindroma? <span style="font-size:40px;color:red;background-color:blue;">${inversioneStringa(parolaInserita)}</span></div>`;
siNo=prompt('Si o No?')

while (siNo=String('si')) {
    document.getElementById('box').innerHTML = `<div>Esatto amico! la parola <span style="font-size:40px;color:red;background-color:blue;">${inversioneStringa(parolaInserita)}</span> è palindroma.</div>`
} document.getElementById('box').innerHTML = `<div>Mi dispiace amico, devi studiare un po di più perchè la parola  <span style="font-size:40px;color:red;background-color:blue;">${inversioneStringa(parolaInserita)}</span> non è affatto palindroma.</div>`

