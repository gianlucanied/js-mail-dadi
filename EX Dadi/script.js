// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generiamo il numero casuale di User

let userNumber = Math.floor(Math.random() * 6) + 1;

// Stampiamo il numero uscito di User

console.log(userNumber);

// Generiamo il numero casuale del PC

let pcNumber = Math.floor(Math.random() * 6) + 1;

// Stampiamo il numero uscito di User

console.log(pcNumber);

// Confrontiamo i due numeri

// Vittoria user

if (userNumber > pcNumber) {
    console.log('Complimenti, hai vinto!');
}

// Vittoria PC

else if (pcNumber > userNumber) {
    console.log('Mi dispiace, hai perso contro il PC :(');
}

// Pareggio

else {
    console.log('I numeri estratti sono uguali, è un pareggio!');
}
