let parolaInserita = prompt("inserisci una parola, e io ti dirò se è palindroma!");
function revString(parolaInserita) {
    var arrayDiSottostringhe = parolaInserita.split("");
    var reverseArray = arrayDiSottostringhe.reverse();
    return reverseArray.join("");
}
if (revString(parolaInserita) == parolaInserita){
    document.getElementById("box").innerHTML += `La parola ${parolaInserita} è palindroma!`
} else {
    document.getElementById("box").innerHTML += `La parola ${parolaInserita} non è palindroma!`
}