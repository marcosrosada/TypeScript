class Person {
    constructor(name) {
        console.log('Person Constructor', name);
    }

    getId() {
        return 10;
    }
}


class Employee extends Person {
    constructor(name) {
        super(name);
        console.log('Employee Constructor', name);
    }

    getId() {
        return super.getId();
        //return 50;
    }
}


let e = new Employee('Marcos');
console.log(e.getId());
