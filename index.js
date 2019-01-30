const greet = require('./src/greet');

greet.emit('clap');

greet.emit('shout', 'Hernán');

greet.emit(
    'call',
    'Hernán',
    (n) => console.log(n)
)