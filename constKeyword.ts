let a = 1
a = 2

const b = 1
// b = 2 // Uncaught SyntaxError "b" is read-only


const object = {
  property: 1
}

object.property = 2
console.log(object.property) // 2
