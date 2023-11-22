// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Creiamo una lista di iscritti

let iscritti = ["mariorossi@gmail.com", "lucaabete@gmail.com", "pincopallino@gmail.com", "marioverde@gmail.com"];

// Stampiamo gli iscritti per vedere se funziona

console.log(iscritti);

// Chiediamo a user la sua email

let userEmail = prompt("Inserisci la tua email");

// Stampiamo la mail inserita per vedere se funziona

console.log(userEmail);

// Verifichiamo che la email sia contenuta nella lista

let email = false;

for (let i = 0; i < iscritti.length; i++) {
    if (iscritti[i] === userEmail) {
        email = true;
    }
}

// Creiamo un alert per avvisare che sia presente la email nella lista

if (email === true) {
    alert('Complimenti, la tua email è presente nel nostro database!');
  }

// Creiamo un alert per avvisare che non sia presente la email nella lista

  else if (email === false) {
    alert('Mi dispiace, la tua email non è presente nel nostro database :(')
  }