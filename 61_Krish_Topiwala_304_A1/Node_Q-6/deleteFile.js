const fs = require('fs');
const util = require('util');

const unlink = util.promisify(fs.unlink);

async function deleteFile(path) {
    try {
        await unlink(path);
        console.log(`Deleted File: ${path}`);
    } catch (error) {
        console.log(`Failed to delete ${path}: `, error);
    }
}

deleteFile('./some-file.txt');