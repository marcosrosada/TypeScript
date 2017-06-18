let firstName = "Chandler";
let lastName = "Bings";


let person = {
    firstName,
    lastName
};

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
