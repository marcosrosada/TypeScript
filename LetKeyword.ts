let message = "Hi";

{
    let message = "Bye";
    console.log("Local:", message ); // Bye
}

console.log("Global:", message); // Hi
console.log("");

var fs = [];

//for (var i = 0; i < 10; i++) {
for (let i = 0; i < 10; i++) {
    fs.push( function () {
        console.log(i);
    });
}

fs.forEach( function(f) {
    f(); // 0 ... 10
});