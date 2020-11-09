const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config');

const app = express()

app.use(
    cors({
        origin: CLIENT_ORIGIN,
    })
);

app.use('/api/people', require('../people/people.router'))
app.use('/api/cats', require('../pets/cats-router'))
app.use('/api/dogs', require('../pets/dogs-router'))

module.exports = app 
