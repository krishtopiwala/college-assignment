const responses = {
    greeting: [
        "Hello! How can I assist you today?",
        "Hi there! Need help?"
    ],
    wifiIssue: [
        "Try restarting your router. If the issue persists, contact IT support.",
        "Check your network settings or contact the IT team at it@company.com."
    ],
    unknown: [
        "Sorry, I don't understand"
    ]
};

function getInput(input) {
    const text = input.toLowerCase();
    if (text.includes('hello') || text.includes('hi')) return "greeting";
    if (text.includes("wifi") || text.includes("internet")) return "wifiIssue";
    return "unknown";
}

function getResponse(input) {
    const intent = getInput(input);
    const options = responses[intent];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

module.exports = { getResponse };