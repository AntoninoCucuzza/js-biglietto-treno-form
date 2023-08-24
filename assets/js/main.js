/* 

Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

console.log('#############');

const priceKm = (0.21);
console.log(priceKm);

var inputKm = document.getElementById('nkm'); //prendo il nome dall'input nkm

var inputAge = document.getElementById('age'); //prendo l'eta dall'input age

const conferma = document.getElementById('conferma');

loop:
conferma.addEventListener('click' , function(e){
    e.preventDefault(); 
    
    inputKm = inputKm.value
    inputAge = inputAge.value

    console.log(Number(inputAge)); 
    console.log(Number(inputKm));    
      
    var priceTot = (inputKm * priceKm);

    if (inputAge < 18) { //va applicato uno sconto del 20% per i minorenni
    
        var priceUnder = (priceTot * 0.8)
        console.log(priceUnder)
    
    } else if (inputAge > 65) { //va applicato uno sconto del 40% per gli over 65.
    
        var priceOver = (priceTot * 0.6)
        console.log(priceOver);
    
    } else{
        console.log(priceTot);
    }

});    

