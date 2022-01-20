let age = parseInt(prompt('Votre age svp: '));

while(age < 0) {
    age = prompt('erreur: Resaisissez votre age SVP: ');
} if(age <= 17) {
    alert('Vous etes trop jeune !');
} else {
    alert('Vous avez ' + age);
}