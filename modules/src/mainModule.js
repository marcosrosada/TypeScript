/*
* Variables
*/
import { firstName, lastName as last, Person } from './moduleVariableB.js'

console.log(`${firstName} ${last}`);

Person.name = 'Marcos Rosada';
console.log('from Module A:', Person.name );


/*
* Default
*/
import name from './moduleVariableDefault.js'

console.log( name );
console.log('');


/*
* Functions
*/
import { sum, mult } from './moduleFunction.js'

sum(1, 2) // 3
mult(1, 2) // 2
console.log('');


/*
* Class
*/
import { Developer } from './moduleClass.js'

var dev = new Developer('Marcos Rosada');
console.log(dev.name);
