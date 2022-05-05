const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
    console.log('successfully connected')
})

const sql = `SELECT * FROM forecasts`;
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message)
    rows.forEach((row) => {
        console.log(row)
    })
})

db.close((err) => {
    if (err) return console.error(err.message)
})