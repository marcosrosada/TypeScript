let firstName = "Chandler";
let lastName = "Bings";
let ln = 'last name';

let person = {
    firstName,
    lastName,
    'first name': 'Joe',
    [ln]: 'Tribbiani'
};

console.log(person['first name'] + ' ' + person[ln]);
console.log("");

let createPerson = (firstName, lastName, age) => {
    let fullName = firstName + ' ' + lastName;

    return {
        firstName,
        lastName,
        fullName,
        isSenior() {
            return age > 60;
        }
    }
}

let p = createPerson("Ross", "Geller", 30);

console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
