const fetch = require('node-fetch');


async function fetchGoogleData() {
    try {   
        const response = await fetch('https://www.google.com');
        const data = await response.text();
        console.log(data);
    } catch(error) {
        console.log(`Error fetching `, error);
    }
}

fetchGoogleData();