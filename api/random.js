const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const apiUrl = 'https://bored-api.appbrewery.com/random';
        const response = await axios.get(apiUrl);
        
        // Allow CORS by adding these headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        
        // Send the response from the external API to the client
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};
