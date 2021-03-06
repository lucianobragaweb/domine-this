function Person(name, age) {
    this.name = name;
    this.age = age || 1;
}

Person.prototype.speak = function(words){
    console.log(this.name + ' says: ' + words)
};

Person.prototype.olden = function(years){
    this.age += years || 1;
    console.log(this.age)
};

function Man(name, age){
    Person.call(this, name, age)
    this.sexo = "Maculino"
};

inherit(Man, Person);

Man.prototype.walk = function(steps){
    this.steps = steps;
    console.log(this.name + ' caminhou ' + this.steps + ' passos!');
};

const luciano = new Man("Luciano", 25);
const bia = new Person("Bia", 2);

luciano.walk(20);

console.log(luciano.age);
delete luciano.age
console.log(luciano.age);
console.log(bia)

function inherit(filha, mae){
    function p(){};

    p.prototype = mae.prototype;
    filha.prototype = new p();
}