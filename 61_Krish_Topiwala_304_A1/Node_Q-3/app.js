const readLine = require('readline');
const chatbot = require('./bot/chatbot.js');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "You > "
});

console.log("IT Helpdesk Bot at your service. Type 'exit' to quit.");
rl.prompt();

rl.on('line', (line) => {
    const input = line.trim();

    if (input.toLowerCase() === 'exit') {
        console.log("Goodbye!");
        rl.close();
        return;
    }

    const response = chatbot.getResponse(input);
    console.log(`BOT > ${response}`);
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});