const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/gethello', (request, response) => {
    response.end("Hello NodeJS");
});

app.listen(port, () => {
    console.log(`Server is listening at PORT: ${port}`);
});