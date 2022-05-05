const getName = require('./getName')
const getWeather = require('./getWeather')

module.exports.getForecast = async (city) => {
    const location = await getName.getName(city)
    if (location.error)
        return location
    const forecast = await getWeather.getWeather(location)
    let temperature = []
    for (let i in forecast.list) {
        let a1 = i - 1
        let a2 = i - 2
        let a3 = i - 3
        let b1 = +i + 1
        let b2 = +i + 2
        let b3 = +i + 3
        if (a1 < 0) {
            a1 += forecast.list.length
        }
        if (a2 < 0) {
            a2 += forecast.list.length
        }
        if (a3 < 0) {
            a3 += forecast.list.length
        }
        if (b1 > forecast.list.length - 1) {
            b1 -= forecast.list.length
        }
        if (b2 > forecast.list.length - 1) {
            b2 -= forecast.list.length
        }
        if (b3 > forecast.list.length - 1) {
            b3 -= forecast.list.length
        }
        let t = (forecast.list[i].main.temp + ((forecast.list[a1].main.temp + forecast.list[a2].main.temp + forecast.list[a3].main.temp) / 3) * (1 - i * 0.02) + (forecast.list[b1].main.temp + forecast.list[b2].main.temp + forecast.list[b3].main.temp) * i * 0.02) / 2
        temperature[i] = {
            temp: Math.round(t * 100) / 100,
            date: forecast.list[i].dt,
            date_txt: forecast.list[i].dt_txt
        }
    }
    return (temperature)
}

//(getForecast('Dnipro'))