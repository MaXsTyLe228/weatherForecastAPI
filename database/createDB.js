const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
    console.log('successfully connected')
})

db.run('CREATE TABLE forecasts(id INTEGER PRIMARY KEY, city, forecast)')

db.close((err) => {
    if (err) return console.error(err.message)
})