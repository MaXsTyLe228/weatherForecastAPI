require('dotenv').config()
const axios = require('axios');

module.exports.getName = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.WEATHER_KEY}`)
        if (response.data.length === 0) {
            return {error: 'incorrect name'}
        }
        const location = {
            lat: response.data[0].lat,
            lon: response.data[0].lon
        }
        return location
    } catch (error) {
        return {error: 'Invalid API key'}
    }
};

//(getName('Dnipro'))