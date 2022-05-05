const sqlite3 = require('sqlite3').verbose()

module.exports.insertDB = (city, forecast) => {
    const db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) return console.error(err.message)
        console.log('successfully connected')
    })

    const sql = `INSERT INTO forecasts(city, forecast) VALUES(?,?)`;
    db.run(sql, [city, forecast], (err) => {
        if (err) return console.error(err.message)
        console.log("new row has been created")
    })

    db.close((err) => {
        if (err) return console.error(err.message)
    })
}


