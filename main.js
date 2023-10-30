// Esercizio 1 

// Concatenazione tra stringhe
// Creare 4 variabili, una con la propria età, una con il proprio nome, una con la materia che stiamo studiando e una con il vostro docente preferito.
// Creare una quinta variabile che sarà l'unione di tutte le variabili create precedentemente.
// In console dovrà comparire 'Ciao, sono Lina, ho 19 anni e sto studiando JavaScript con il miglior docente del globo, Valerio Vacca!'

let anni= 19;
let nome= 'Lina';
let materia= 'Javascript';
let docente= 'Valerio Vacca';

let frase= `Ciao, mi chiamo ${nome}, ho ${anni} anni e sto studiando ${materia} con il miglior Docente del Golobo ${docente}!`;

console.log (frase);


// Esercizio 2

// Creare 5 variabili contenenti un numero
// Scrivere un programma in modo da ottenere la somma tra questi numeri e successivamente la media.
// In console deve uscire la seguente frase: ‘La somma tra i numeri equivale a … e la media risulta...’

let n1= 12;
let n2= 5;
let n3= 17;
let n4= 43;
let n5= 34;

let somma= (n1+n2+n3+n4+n5);

let media= (somma / 5);

console.log(somma);

let frase2= `La somma tra i numeri equivale a ${somma} e la media risulta essere ${media}`;

console.log (frase2);


// Esercizio 3

// Scrivi due variabili, una con l’anno corrente e  l'atra con il tuo anno di nascita
// -Stampa in console: 
// l’età della persona,
// quanti anni sono necessari per raggiungere i 100
// esempio in console: “Hai 26 anni e ti mancano 74 anni per compierne 100”

let annoCorrente= 2023;
let annoNascita= 1988;

let eta= (annoCorrente - annoNascita);

console.log (eta);

let anniMancanti= (100 - eta);

console.log(anniMancanti);

let frase3= `Hai ${eta} anni e ti mancano ${anniMancanti} per compierene cento`;

console.log (frase3);


// Esercizio 4

// Scrivere un programma che dati: 
// Un numero totale di gatti (44)
// Il numero dei gatti presenti in ogni fila (6)
// Restituisca in output: 
// Il numero di file complete risultanti
// Indicare il numero di gatti mancanti per completare una nuova fila
// Esempio in console: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”

let totaleGatti =44;
let gattiPerFila =6;

let numeroFileRisultanti= Math.floor(totaleGatti / gattiPerFila);

console.log (numeroFileRisultanti);

let gattiMancanti=(numeroFileRisultanti*gattiPerFila) - totaleGatti;

console.log (gattiMancanti);

let resto= totaleGatti % gattiPerFila;

console.log (resto);

let frase4= `Ci sono ${numeroFileRisultanti} gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${resto} gatti`;

console.log (frase4);