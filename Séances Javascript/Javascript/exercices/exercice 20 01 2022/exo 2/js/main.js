let age = parseInt(prompt('Votre age svp: '));

while(age <= 0) {
    age = prompt('erreur: Resaisissez votre age SVP: ');
} 
if(age <= 17) {
    alert('Vous etes trop jeune !');
} 
else {
    alert('Vous avez ' + age);
}

// let age_errone;

// if(age < 0) {
//     while(age < 0) {
//         age_errone = parseInt(prompt('erreur: ressaisissez votre age: '));
//         age = age_errone;
//     }
//     alert('Vous avez ' + age);
// } else {
//     alert('Vous avez ' + age);
// }
