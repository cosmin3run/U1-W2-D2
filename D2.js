/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 11;
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 6;
if (num !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numfor = 15;
let multiplo5 = numfor % 5;
if (multiplo5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro 
  addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let firstnum = 4;
let secnum = 3;
let somma = firstnum + secnum;
let sottrazione = firstnum - secnum;
if (firstnum === 8 || secnum === 8 || somma === 8 || sottrazione === 8) {
  console.log(true);
} else {
  console.log(false);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 51;

if (totalShoppingCart <= 50) {
  console.log(
    "la tua spesa ammonta a ",
    totalShoppingCart +
      10 +
      ", " +
      "Raggiungendo 50 € di spesa avrai la consegna Gratuita"
  );
} else {
  console.log(
    "Vista la promozione l'importo totale della tua spesa è",
    totalShoppingCart
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima 
  se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart1 = 68;
let sconto = (totalShoppingCart1 / 100) * 20;
let totalShoppingCart2 = totalShoppingCart1 - sconto;

// console.log(
//   "il totale della spesa è",
//   totalShoppingCart2,
//   "escludendo le spese di consegna"
// );

console.log(totalShoppingCart2);
if (totalShoppingCart2 <= 50) {
  console.log(
    "la tua spesa ammonta a ",
    totalShoppingCart2 +
      10 +
      ", " +
      "Raggiungendo 50 € di spesa avrai la consegna Gratuita"
  );
} else {
  console.log(
    "Vista la promozione l'importo totale della tua spesa è",
    totalShoppingCart2
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val1 = 18;
let val2 = 15;
let val3 = 78;

if (val1 <= val2 && val2 <= val3) {
  console.log(val1, val2, val3);
} else if (val2 >= val3 && val1 <= val3) {
  console.log(val1, val3, val2);
} else if (val1 <= val3 && val2 <= val1) {
  console.log(val2, val1, val3);
} else if (val3 >= val2 && val1 >= val3) {
  console.log(val2, val3, val1);
} else if (val3 <= val2 && val2 <= val1) {
  console.log(val3, val2, val1);
} else {
  console.log(val3, val1, val2);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 6;

if (typeof valore === "number") {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let intero = 7;
let parDispar = intero % 2;
if (parDispar === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 8;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

// me.push((city = "Toronto"));
// console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = [];
arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arr.pop();
arr.push(100);
console.log(arr);
