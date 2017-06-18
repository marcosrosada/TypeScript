console.log('Basic array destructing');

{
    let [a, b] = [1, 2]

    console.log(a) // 1
    console.log(b) // 2
}

console.log('\nRest operator');
{
    let [a, b, ...rest] = [1, 2, 3, 4, 5]

    console.log(a) // 1
    console.log(b) // 2
    console.log(rest) // 3, 4, 5
}

console.log('\nObject destructing');
{
    const person = { firstName: 'Marcos', lastName: 'Rosada' }//, age: 31 }

    let {firstName, lastName: last, age=31} = person

    console.log(firstName) // 'Marcos'
    console.log(last) // 'Matheus'
    console.log(age) // 26
}
