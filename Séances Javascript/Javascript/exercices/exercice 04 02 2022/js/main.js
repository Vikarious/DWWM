// Exercice 5 : L’objet String - Mettre la première lettre d'un mot en majuscule [facile]
// Ecrire une fonction qui met en majuscule la première lettre de chaque mot d'une phrase
// Exemple : le corbeau et le renard => Le Corbeau Et Le Renard

let captalizeWord = text => text.split(' ').map( (i, j) => i.charAt(0).toUpperCase()+i.slice(1) ).join(' ');

console.log(captalizeWord('le corbeau et le renard'));