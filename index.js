const index = require('express')()
const getForecast = require('./src/weatherController')
const insert = require('./database/insertDB')

const host = '127.0.0.1'
const port = 7000


index.get('/get_weather', async (req, res) => {
    const forecast = await getForecast.getForecast(req.query.city)
    insert.insertDB(req.query.city, forecast)
    res.send(forecast)
})

index.use((req, res, next) => {
    res.status(404).type('text/plain')
    res.send('Not found')
})

index.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
})