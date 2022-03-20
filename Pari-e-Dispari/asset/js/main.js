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
    var numeroUtentePari = Number(prompt('Inserisci un numero da 1 a 5'));
    let arrayPari = [];
    arrayPari.push(numeroUtentePari);
    console.log(arrayPari);
    return arrayPari;
}
)


bottoneDispari.addEventListener('click',
    function() {
      var numeroUtenteDispari = Number(prompt('Inserisci un numero da 1 a 5'));
      let arrayDispari = [];
      arrayDispari.push(numeroUtenteDispari);
      console.log(arrayDispari);
      return arrayDispari;
    }
)

let numero = Math.floor(Math.random() * 5);

// Genero il numero random del computer
function numRandom(numero) {
  let x = Math.floor(Math.random() * numero);
    return x;
}

document.getElementById('computer').innerHTML += `<div> ${numRandom(numero)} </div>`;

// if(numeroUtentePari == 'pari'){
//     console.log(numeroUtentePari);
// } else {
//     console.log(numeroUtenteDispari)
// }




// function pariDispari () {
//         if (numero % 2 == 0) {
//             return 'pari';
//         } else {
//             return 'dispari';
//         }
//     }
 
    



// function numRandom (numero) {
//     let x = Math.floor(Math.random() * numero);
//     return x;
// }

// console.log(numRandom (numero));



// let i = 1;

// while (i <= 10) {
//     document.getElementById('box').innerHTML += `<div> ${numRandom(numero)} </div>`;
//     i++;
// }
    
    
    // let numero = parseInt(prompt('inserisci un numero'));
    // // invoco la funzione
    // console.log(pariDispari(numero));
    
    // if (pariDispari(numero) == 'pari') {
    //     document.getElementById('box').innerHTML = `${numero} è pari`;
    // } else {
    //     document.getElementById('box').innerHTML = `${numero} è dispari`;
    // }

    // let numero = parseInt(prompt('inserisci un numero'));
// // invoco la funzione
// console.log(pariDispari(numero));

// if (pariDispari(numero) == 'pari') {
//     document.getElementById('box').innerHTML = `${numero} è pari`;
// } else {
//     document.getElementById('box').innerHTML = `${numero} è dispari`;
// }


// var min = 8;
// var max = 30;

// alertify.prompt( 'Prompt Title', 'Prompt Message', 'Prompt Value',
//   function(evt, value) {
//     if (value < min) {
//       console.log("your value is too low");
//     } else if (value > max) {
//       console.log("your value is too large");
//     } else {
//       alertify.success('You entered: ' + value)
//     }
//   },
//   function() {
//     alertify.error('Cancel')
//   }).setting({type: 'number'});