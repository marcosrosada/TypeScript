import { firstName, lastName as last, Person } from './moduleVariableB.js'
import name from './moduleVariableDefault.js'

Person.name = 'Marcos Rosada from Module A';

console.log(`${firstName} ${last}`);
console.log( Person.name );
console.log( name );
