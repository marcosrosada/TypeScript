var anonymousFunction = function (message:string, name:string) {
    return message + " - " + name;
}

console.log("Anonymous Function: ", anonymousFunction("Hello World!", "Marcos Rosada"));



const arrowFunction = (message:string, name:string) => message + " - " + name

console.log("Arrow Function: ", arrowFunction("Hello World!", "Marcos Rosada"));