class Person {
    constructor (name, age, sex, parent, work, friends) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.parent = parent;
        this.work = work;
        this.friends = friends;
    }
    addFriend(name, age, sex, parent, work, friends){
        this.friends.push(new Person(name, age, sex, parent, work, friends));
    }
};

let seb = new Person ('Sebastien', 25, 'M', 'ainé', 'Developper', []);
seb.age = 23;
seb.addFriend('Annie', 26, 'F', 'Developpeuse', []);
seb.addFriend('John', 46, 'M', 'Developper', []); 

alert (seb.name + ' a ' + seb.age + ' ans.'+ 'Amis: ' + seb.friends[0].name);