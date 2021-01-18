const express = require('express')

const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Ola mundo pelo express'))
app.listen(port, () => console.log("funcionando de boa"))