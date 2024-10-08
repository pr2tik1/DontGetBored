const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/random', async (req, res) => {
    try {
        // Make the request to the external API
        const apiUrl = 'https://bored-api.appbrewery.com/random';
        const response = await axios.get(apiUrl);
        
        // Send the external API's response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
