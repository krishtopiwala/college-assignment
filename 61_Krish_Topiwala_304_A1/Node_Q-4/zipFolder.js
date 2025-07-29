const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipFolder(sourceFolder, outPath) {
    const output = fs.createWriteStream(outPath);
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    return new Promise((resolve, reject) => {
        output.on('close', () => {
            console.log(`Zipped ${archive.pointer()} total bytes`);
            resolve();
        });

        archive.on('error', err => reject(err));

        archive.pipe(output);

        archive.directory(sourceFolder, false);

        archive.finalize();
    });
}

const folderPath = path.join(__dirname, 'myFolder');
const outputZip = path.join(__dirname, 'myFolder.zip');

zipFolder(folderPath, outputZip)
.then(() => console.log('Folder zipped successfully!'))
.catch(err => console.error("Error while zipping ", err));