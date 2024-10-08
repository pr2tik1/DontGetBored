const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const apiUrl = 'https://bored-api.appbrewery.com/random';
        const response = await axios.get(apiUrl);

        // Set CORS headers to allow cross-origin requests
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        
        // Respond with data
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
};
