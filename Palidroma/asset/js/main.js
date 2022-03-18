// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

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
if(siNo===String('si')) {
    document.getElementById('box2').innerHTML = `<div>Esatto amico! la parola <span style="font-size:40px;color:red;background-color:blue;">${inversioneStringa(parolaInserita)}</span> è palindroma.</div>`;
} else {
    document.getElementById('box').innerHTML += `<div>Esatto amico, la parola  <span style="font-size:40px;color:red;background-color:blue;">${inversioneStringa(parolaInserita)}</span> non è affatto palindroma.</div>`;
}






