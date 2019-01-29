const math = require('./math');
const hello = require('./greetings/hello');
const greeting = require('./greetings/index');
const even = require('./even');

console.log(math.add(2,2));
console.log(hello.sayHello('Hernán'));
console.log(greeting.greet('Hernán'));
console.log(`Is even: ${even.isEven(8)}`);
console.log(`Is even: ${even.isEven(9)}`);