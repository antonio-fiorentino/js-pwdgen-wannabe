var nome = prompt ('Ciao, come ti chiami?');
console.log('Il suo nome é ' + nome);
var cognome = prompt("Ciao " + nome + ", qual'è il tuo cognome?")
console.log('Il suo cognome é ' + cognome);
var colore = prompt("Qual'é il tuo clore preferito?")
console.log("il suo colore preferito è " + colore)
var container = document.getElementById('password');
var anno = new Date().getFullYear();
container.innerText = ('Ciao la tua password é:');
container.append('\n'nome + cognome + colore + anno);






// var container = document.getElementById('password');
// container.innerText = 'Ciao ' + risposta;
// var age = prompt('Ciao' + risposta + '. Quanti anni hai?');
// console.log( risposta + ' ha ' + age + ' anni');
// var annoCorrente = new Date().getFullYear();
// var annoDiNascita = annoCorrente - age;
// container.append('\nLa tua data di nascita è ' + annoDiNascita);
