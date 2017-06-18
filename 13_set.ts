let mySet = new Set();
let obj1 = {};
let obj2 = {};

mySet.add("Hello");
mySet.add(1);
mySet.add(1);
mySet.add(obj1);
mySet.add(obj2);
console.log('My Set Size:', mySet.size);


let newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log('New Set Size:', newSet.size);

newSet.delete(2);
console.log('New Set Size:', newSet.size);


console.log(newSet.has(2));
