const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false})) // transforma os dados do post em objeto 

userRoute(app)

app.get('/', (req, res) => res.send('Ola mundo pelo express'))
app.listen(port, () => console.log("funcionando de boa"))