const getValue = (value = 10, bonus = 5) => console.log(value + bonus);

getValue(); // 15
getValue(20); // 25
getValue(20, 30); // 50
getValue(undefined, 30); // 40


console.log("");

const percenBonus = () => 0.1;
const getValuePlus = (value=10, bonus=value*percenBonus()) => console.log(value + bonus);

getValuePlus(); // 11
getValuePlus(20); // 22
getValuePlus(20, 30); // 50