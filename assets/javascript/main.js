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

// ---------- Generatore Numeri da 1 a 100 ----------
for(let i=1;i<=100;i++)
{
    //Assegno alle variabili di appoggio (x & y) il valore di i
    x = i;
    y = i;
    z = i;

    //Estrapolo il resto per i multipli di 3, 5 e 15
    x %= 3;
    y %= 5;
    z %= 15;

    //Interrogo le variabili appoggio (z - y - x):
    //  -se il resto di z è 0 allora stampo FizzBuzz!
    //  -altrimenti se il resto di y è 0 stampo Buzz!
    //  -altrimenti se il resto di x è 0 stampo Fizz!
    //  -altrimenti stampo il valore di i
    if(z === 0)
    {
        console.log("FizzBuzz!");
    }
    else if(y === 0)
    {
        console.log("Buzz!");
    }
    else if(x === 0)
    {
        console.log("Fizz!");
    }
    else
    {
        console.log(i);
    }

}









































// ----- FINE :) -----