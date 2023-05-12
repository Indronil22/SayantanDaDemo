
const express = require('express')
const app = express()
const cors = require('cors')
const { Client } = require('pg')
const client = new Client({
    database: "postgres",
    user: "postgres",
    password: "7890753528",
})
app.use(cors());
app.get('/', async function (req, res) {
    const content = await client.query('SELECT * from user_content');
    console.log(content.rows)
    return res.json(content.rows)
})
client.connect().then(() => {
    app.listen(8000, () => {
        console.log('Sever has started');
    })
})
