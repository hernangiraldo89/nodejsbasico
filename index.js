const cp = require('child_process');

const execCommand = (command) => {
    cp.exec(command, (err, stdout, stderr) => {
        if (err) throw err;
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    });
}

execCommand('ls');
execCommand('node ./src/script.js --base=5')