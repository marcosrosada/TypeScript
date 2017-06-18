"use strict";
var message = "Hi";
{
    var message_1 = "Bye";
    console.log("Local:", message_1); // Bye
}
console.log("Global:", message); // Hi
console.log("");
var fs = [];
var _loop_1 = function (i) {
    fs.push(function () {
        console.log(i);
    });
};
//for (var i = 0; i < 10; i++) {
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
fs.forEach(function (f) {
    f(); // 0 ... 10
});
//# sourceMappingURL=LetKeyword.js.map