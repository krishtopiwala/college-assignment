const express = require('express');
const app = express();

app.use(express.static('./public'));

app.use((req, res) => {
    res.send("Hello NodeJS!");
});

app.listen(3000, () => {
    console.log("Server is listening");
});