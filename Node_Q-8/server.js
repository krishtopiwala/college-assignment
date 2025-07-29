const http = require('http');

http.createServer((req, res) => {
    res.write("Server is running");
}).listen(5000, () => {
    console.log("Server is listening at 5000");
})