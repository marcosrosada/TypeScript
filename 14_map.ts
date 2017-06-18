let myMap = new Map();

myMap.set('firstName', 'Marcos');
myMap.set('age', 30);

console.log(myMap); // Map { 'firstName' => 'Marcos', 'age' => 30 }
console.log(myMap.get('firstName')); // Marcos

let obj1 = {},
    obj2 = {};

myMap.set(obj1, 10);
myMap.set(obj2, 20);

console.log(myMap.get(obj1)); // 10
console.log(myMap.size); // 4
console.log(myMap.has('firstName')); // true

myMap.delete('firstName');

console.log(myMap.size); // 3
console.log(myMap.has('firstName')); // false
console.log('');




/**
* interating over Maps
*/
let newMap = new Map([
    ['firstName', 'Marcos'],
    ['lastName', 'Rosada']
]);

for (let key of newMap.keys()) {
    console.log('Key:', key);
}

for (let value of newMap.values()) {
    console.log('Value:', value);
}

for (let [key, value] of newMap.entries()) {
    console.log('Key -> Value:', `${key} -> ${value}`);
}
