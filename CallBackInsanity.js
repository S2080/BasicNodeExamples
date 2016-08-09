/**
 * read multiple file from current directory
 */

var fs = require("fs");

fs.readdir('.', function (err, files) {

    if(err) {
        console.log('Error finding files' + err);
    } else {
        files.forEach(function(fileName,fileIndex) {
            console.log('====================================================');
            console.log("File Name ::" + fileName + "  FileIndex ::" + fileIndex);
         
        })
    }
});


var fileData = fs.readFileSync('package.json').toString();

console.log(fileData);

/**
 * Read file using callback function
 * Asynch file reading
 */
fs.readFile('package.json', function (err, buf) {

    console.log(buf.toString());
});


console.log('After Method');