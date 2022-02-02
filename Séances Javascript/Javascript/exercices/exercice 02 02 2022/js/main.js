// Mercredi 2 février 2022
// Exercice 1 : L’objet String - inverser un nombre [facile]
// Ecrire une fonction javascript qui inverse un nombre.
// Exemple : 2016 => résultat 6102

function myReverseString (str) {
    let myNewString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        myNewString +=  str[i]
    }
    return myNewString;
}

console.log(myReverseString("2016"));