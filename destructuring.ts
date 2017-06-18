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
    const person = { name: 'Marcos', last: 'Rosada' }//, age: 31 }

    let {name, last, age=31} = person

    console.log(name) // 'Marcos'
    console.log(last) // 'Matheus'
    console.log(age) // 26
}
