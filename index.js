const fs = require('fs');
const fo = require('./src/fileops');

fs.readFile(
    './resources/number.txt',
    'utf-8',
    (err, text) => {
        if (err) throw err;
        const numbers = text.split('\n').map( n => Number(n));
        saveNewNumbers(fo.incrementValues(numbers));
    }
);

const saveNewNumbers = (incremented) => {
    fs.writeFile(
        './resources/numbersNew.txt',
        incremented.join('\n'),
        (err, result) => {
            if (err) throw err;
        }
    );
}

fs.readFile(
    './resources/name.txt',
    'utf-8',
    (err, text) => {
        if (err) throw err;
        const names = text.split('\n');
        saveNewNames(fo.callNames(names));
    }
);

const saveNewNames = (newNames) => {
    fs.writeFile(
        './resources/newName.txt',
        newNames.join('\n'),
        (err, result) => {
            if (err) throw err;
        }
    );
}