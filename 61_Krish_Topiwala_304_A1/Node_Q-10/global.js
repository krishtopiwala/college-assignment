console.log("Current filename ", __filename);
console.log("Current directory ", __dirname);

console.log("Process platform ", process.platform);
console.log("Node version ", process.version);

setTimeout(() => {
    console.log("Message appears after 3 seconds");
}, 3000);

global.myGlobalVar = "Accessible from anywhere";

function printGlobal() {
    console.log("Global variable ", myGlobalVar);
}

printGlobal();

const buf = Buffer.from('Hello, world!');
console.log("Buffer content ", buf.toString());