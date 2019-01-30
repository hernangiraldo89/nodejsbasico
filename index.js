const call = require('./src/call');

// console.log(call.sync('Hernán'));

// call.withCallback(
//     'Hernán',
//     (z) => console.log(z)
// );

(async () => {
    console.log(await call.withPromise('Hernán'));
})();