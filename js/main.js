/* Chiedere all'utente:
Il suo nome;
Il suo cognome;
Il suo colore preferito; */

// inserisco le variabili con il prompt

let userName = prompt("Qual è il tuo nome?");

let surname = prompt("Qual è il tuo cognome?");

let favoriteColor = prompt("Qual è il tuo colore preferito?");

let password = userName + surname + favoriteColor;

// utilizzo un template literal e stampo sulla console

 console.log(`Il tuo nome è: ${userName}
Il tuo cognome è: ${surname}
Il tuo colore preferito è: ${favoriteColor}
 
La tua password è: ${password}21`);