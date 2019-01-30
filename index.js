const call = require('./src/call');

// call.greet('Hernán')

(async () => {
    console.log(await call.withPromise('Hernán', 'Giraldo'));
})();