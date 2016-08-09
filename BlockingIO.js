/**
 * Read File asynchonsouly
 */

var fs = require('fs');


console.log("Before File Read");

var fileData = fs.readFileSync('package.json').toString();

console.log(fileData);

console.log("After File Read Completion");

/**
 * Read file using callback function
 * Asynch file reading
 */
fs.readFile('package.json', function (err, buf) {

    console.log(buf.toString());
});

console.log("After readFile");