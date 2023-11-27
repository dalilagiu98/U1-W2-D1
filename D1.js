/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// Per JS esistono più tipologie di valori che possiamo assegnare a una variabile (o a una costante)
let string = 'stringa' //per il valore di stringa avremo una stringa di caratteri alfanumerici racchiusi tra apostrofi o virgolette
let num = 1 //per il valore di numero avremo appunto un valore numerico
let boolean = true //i datatype boolean accettano solo valori di true (vero) o false (falso)
let variabile = null //si assegna un valore null quando vogliamo che la nostra variabile abbia già in partenza un valore predefinito di null
// possiamo inoltre avere un valore undefined quando per esempio dichiariamo l'esistenza di una variabile ma non attribuiamo nessun valore
let undeterminated
// se utilizziamo console.log ci tornerà indietro un valore undefined 
console.log(undeterminated)


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// creo la variabile myName assegnando il valore
let myName = "Dalila"
// controllo il valore con il comando
console.log('il valore di myName è', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

// creo una variabile a cui assegno num1
let num1 = 12   
// creo una seconda variabile a cui assegno num2 
let num2 = 20
// creo una terza variabile che è la somma dei primi due 
let sum = num1 + num2
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

// creo la variabile let a cui assegno il nome di x e attribuisco il valore numerico di 12
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// assegno a myName un nuovo valore
myName = 'Giurgola'
// controllo il valore con il comando
console.log('il valore di myName adesso è di', myName)
// provo a dichiarare una costante di nome myName1 a cui attribuisco il valore 'Dalila'
const myName1 = 'Dalila'
// controllo il valore tramite console.log 
console.log(myName1)
// adesso provo ad attribuire a questa costante un nuovo valore
// myName1 = 'Giurgola'
// dando questo comando la console del browser mi da un messaggio di errore, poiché a const si può assegnare uno ed uno solo valore 
// console.log(myName1) 


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

// scrivo la formula
let subtraction = 4 - x 
// controllo il risultato tramite il comando console.log 
console.log(subtraction)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


// creo le variabili 
let name1 = 'john'
let name2 = 'John'
// uso l'operatore di comparazione
console.log (name1 === name2)
// per la verifica dell'ugualianza il lowercase utilizziamo il metodo .toLowerCase applicato al name1
console.log (name2.toLowerCase() === name1)
