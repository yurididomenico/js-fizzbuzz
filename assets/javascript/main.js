// JAVASCRIPT //
/*

-Scrivi un programma che stampi in console i numeri da 1 a 100
-Per i multipli di 3 stampi “Fizz” al posto del numero
-Per i multipli di 5 stampi “Buzz”.
-Per i multipli di 3 e di 5 stampi “FizzBuzz”.

*/

console.log('Ciao!');

let x;
let y;
let z;

let contenitore = document.getElementById('FizzBuzzSpace');


// ---------- Generatore Numeri da 1 a 100 ----------
for (let i = 1; i <= 100; i++) {
    let div = document.createElement('div');
    div.classList.add('quad');
    

    //Assegno alle variabili di appoggio (x & y) il valore di i
    x = i;
    y = i;
    z = i;

    //Estrapolo il resto per i multipli di 3, 5 e 15
    x %= 3;
    y %= 5;
    z %= 15;

    //Interrogo le variabili appoggio (z - y - x):
    if (z === 0) 
    {
        div.innerText += "FizzBuzz!";
        div.classList.add('personal-bg-red');
    }
    else if (y === 0) 
    {
        div.innerText += "Buzz!";
        div.classList.add('personal-bg-green');
    }
    else if (x === 0) 
    {
        div.innerText += "Fizz!";
        div.classList.add('personal-bg-yellow');
    }
    else 
    {
        div.innerText += i;
        console.log(i);
        div.classList.add('personal-bg-lightblue');
    }

    contenitore.append(div);

}




// -----------------------------------






















































// ----- FINE :) -----