// Exercice 4 : L’objet String - classer les lettres dans l'ordre alphabétique [facile]
// Ecrire une fonction javascript qui retourne toutes les lettres d'une chaîne de caractères dans l'ordre alphabétique
// Exemple : développeur => deeloppruvé

function sortString(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}

console.log(sortString("développeur"));