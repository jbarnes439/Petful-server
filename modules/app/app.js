const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/api/people', require('../people/people.router'))
app.use('/api/cats', require('../pets/cats-router'))
app.use('/api/dogs', require('../pets/dogs-router'))

module.exports = app 
