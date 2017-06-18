class Person {
    constructor(name) {
        this._name = name;
        console.log('Constructor', this._name);
    }

    greetPerson() {
        console.log('Simple method', `Hello ${this._name}`);
    }

    static staticMethod() {
        console.log('Static Method');
    }
}


let p = new Person('Marcos');
p.greetPerson();
Person.staticMethod();
