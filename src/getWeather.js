require('dotenv').config()
const axios = require('axios');

module.exports.getWeather = async ({lat, lon}) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_KEY}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
};

//(getWeather({ lat: 48.4680221, lon: 35.0417711 }))