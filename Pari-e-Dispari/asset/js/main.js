let pariDispari = prompt("Pari o Dispari?");
let numeroUtente = parseInt(prompt("Scegli un numero tra 1 & 5"))
let print = document.getElementById("print");

while ( numeroUtente < 1 || numeroUtente > 5){
    numeroUtente = parseInt(prompt("Ripeti, il numero deve essere compreso tra 1 e 5"))
}

var numero;
function numeroRandom (numero){
    numero = Math.floor(Math.random()*5 +1);
    return numero;
}
let random = numeroRandom(numero)
let somma = numeroUtente + random;



print.innerHTML += `${getPariDispari()} <div>Il computer ha scelto: ${random}</div><div>L'utente ha scelto: ${numeroUtente}</div>`
function getPariDispari(){
    
    if(pariDispari == "pari" && somma % 2 == 0){
        return print.innerHTML += `Che fortuna!! Hai vinto, il numero ${somma} è pari!`
    } else if (pariDispari == "dispari" && somma % 2 != 0){
        return print.innerHTML += `Che fortuna!! Hai vinto, il numero ${somma} è dispari!`
    } else {
        return print.innerHTML += `Stupido umano, il numero ${somma} non è ${pariDispari} hai perso!`
    }
}
