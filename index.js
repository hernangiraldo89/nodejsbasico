const errors = require('./src/errors');
const { sync, errorFirstCallbackWrong, errorFirstCallback } = require('./src/handling');

try {
    errors.standardErr.range();
} catch(e) {
    console.log('Ha ocurrido un error')
}

sync();
errorFirstCallbackWrong();
errorFirstCallback();