/* Chiedere all'utente:
Il suo nome;
Il suo cognome;
Il suo colore preferito; */

// inserisco le variabili con il prompt

let userName = prompt("Qual è il tuo nome?");

let surname = prompt("Qual è il tuo cognome?");

let favoriteColor = prompt("Qual è il tuo colore preferito?");

// utilizzo un template literal

let password = `la tua password è: ${userName}${surname}${favoriteColor}21`;

//stampo sulla console

console.log(password);

