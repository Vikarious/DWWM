// let maChaine = 'c\'est un test';
// let monTableau = maChaine.split(' ');

// for(let i = 0; i < monTableau.length; i++){
//     console.log(monTableau [i] + '\n');
// }

let Person = {
    name : 'Sebastien',
    age : 25,
    sex : 'M',
    parent : 'ainé',
    work : 'developper'
};

for (let property in Person ) {
    console.log(`${property}`);
};

let animalsArray = ["cat", "dog", "fish"];

for (let value of animalsArray) {
    console.log(value);
};

