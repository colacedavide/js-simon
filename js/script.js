// creo numeri random

function numRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}



// creo funzione per creare array con numeri random

function numeriArray(min, max, tot);

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



//