const math = Math.max(12, 56, 85, 25);
// console.log(math);
const nubers = [12, 45, 78, 99]
console.log(...nubers);
const largest = Math.max(...nubers);
console.log(largest);
const nubers2 = [...nubers,111];
nubers.push(55);
nubers2.push(77)
console.log(nubers,nubers2)