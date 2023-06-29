/* Chiedere all'utente:
Il suo nome;
Il suo cognome;
Il suo colore preferito;
Scrivere sulla console :"nomecognomecolorepreferito21"

Bonus:

-Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
-Mostrare la password generata sulla vostra pagina HTML sbizzarrendosi con il layout e volendo potete usare Bootstrap
-Fare un layout responsive  */


// inserisco le variabili con il prompt

let userName = prompt("Qual è il tuo nome?");

let surname = prompt("Qual è il tuo cognome?");

let favoriteColor = prompt("Qual è il tuo colore preferito?");

// aggiungo i 2 numeri del bonus con l'operazione di divisione

let number1 = prompt("Digita un numero casuale")

let number2 = prompt("Digita un altro numero")

let finalNumber = number1 / number2

let password = userName + surname + favoriteColor;

// utilizzo un template literal e stampo sulla console

console.log(`Il tuo nome è: ${userName}
Il tuo cognome è: ${surname}
Il tuo colore preferito è: ${favoriteColor}
 
La tua password è: ${password}${finalNumber}`);


// Stampo le informazioni su HTML

document.getElementById("firstName").innerHTML = userName;
document.getElementById("lastName").innerHTML = surname;
document.getElementById("userColor").innerHTML = favoriteColor;
document.getElementById("userpwd").innerHTML = password + finalNumber;