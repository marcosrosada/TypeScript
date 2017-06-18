let s1 = Symbol('First Symbol'),
    s2 = Symbol('Test'),
    s3 = Symbol('Test'),
    s4 = Symbol.for('RegSymbol'),
    s5 = Symbol.for('RegSymbol');

console.log('typeof:', typeof s1); // Symbol
console.log(s1.toString()); // Symbol(First Symbol)

console.log('s2 === s3:', s2 === s3); // false
console.log('s4 === s5:', s4 === s5); // false
console.log('Symbol For:', Symbol.keyFor(s4));

let firstName = Symbol('firstName');
let person = {
    [firstName]: 'Marcos'
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
