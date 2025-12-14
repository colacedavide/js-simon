// creo numeri random

function numRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}



// creo funzione per creare array con numeri random

function numerix (min, max, tot){

let array = [];

//la lunghezza di array deve essere minore di 5

while(array.length < tot){
    const numeroX = numRandom(min , max);
    // ! operatore di negazione 
    // includes metodo degli array che controlla se un certo
    //valore è presente nell'array
 if(!array.includes(numeroX)){
    array.push(numeroX);
 }
}
    return array;
}

//timer variabili
let secondi = 10;
let timer;
//selezioni elemento numeri random
const Lista = document.getElementById("numbers-list");

//genero i numeri
const numeriLista = numerix(1, 50, 5);
//mostro i numeri separati da virgole
Lista.innerText = numeriLista.join(", ");

// selezione dove posso mostrare il countdown
const tempoPag = document.getElementById("countdown");
// testo istruzioni
const istruzioni = document.getElementById("instructions");
//form
const form = document.getElementById("answers-form");

// timer che da 10 sec va a 0
timer = setInterval(() => {
    tempoPag.innerText = --secondi;

    //quando arriva a 0 nascondo tutti gli elemtenti
    if(secondi===0) {
        clearInterval(timer);
        tempoPag.classList.add("d-none");
        istruzioni.classList.add("d-none");
        Lista.classList.add("d-none");
        form.classList.remove("d-none");

    }
} , 1000);

//submit

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let indovinati = [];
    let numeriutente = document.querySelectorAll("#input-group input");// tutti gli input ovvero i numeri inseriti dall'utente
    let messaggio = document.getElementById("message");

    //input dell'utente faccio un ciclo per scorrerli

    for(let i = 0; i< numeriutente.length; i++){
        let utente = numeriutente[i].value;
     if(numeriLista.includes(utente) && !indovinati.includes(utente)){
        indovinati.push(utente);
     }
    }

    messaggio.innerText = "Hai indovinato" + indovinati.length + "numeri!!"
})
