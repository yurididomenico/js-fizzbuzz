// JAVASCRIPT //
/*

-Scrivi un programma che stampi in console i numeri da 1 a 100
-Per i multipli di 3 stampi “Fizz” al posto del numero
-Per i multipli di 5 stampi “Buzz”.
-Per i multipli di 3 e di 5 stampi “FizzBuzz”.

*/

console.log('Ciao!');

let x;

// ---------- Generatore Numeri da 1 a 100 ----------
for(let i=1;i<=100;i++)
{
    x = i;
    x %= 3;
    if(x === 0)
    {console.log("Fizz!");}
    else 
    {console.log(i);}
    
}









































// ----- FINE :) -----