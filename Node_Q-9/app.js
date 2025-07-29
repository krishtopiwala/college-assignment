const fs = require('fs');

// Create a file

fs.writeFileSync('sample.txt', 'This is a sample text file');
console.log('File created successfully');

// Read a file

const content = fs.readFileSync('sample.txt', 'utf-8');
console.log('File content ', content);

// Append a file

fs.appendFileSync('./sample.txt', '\n Appended file.');
console.log('Content appended');

// // Rename a file

fs.renameSync('sample.txt', 'new.txt');
console.log('File renamed');