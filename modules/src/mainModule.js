import { firstName, lastName as last, Person } from './moduleVariableB.js'
import name from './moduleVariableDefault.js'

import { sum, mult } from './moduleFunction.js'


console.log(`${firstName} ${last}`);

Person.name = 'Marcos Rosada';
console.log('from Module A:', Person.name );

console.log( name );

console.log('');

sum(1, 2) // 3
mult(1, 2) // 2
