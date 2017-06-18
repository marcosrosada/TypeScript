import { firstName, lastName as last, Person } from './moduleB.js'

Person.name = 'Marcos Rosada';

console.log(`${firstName} ${last}`);
console.log( Person.name );
