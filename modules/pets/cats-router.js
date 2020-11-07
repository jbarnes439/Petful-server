const express = require('express');
const json = require('body-parser').json();

const catService = require('./cat-service');
const People = require('../people/people.service');
const { cats } = require('../../store');

const catRouter = express.Router();

catRouter
    .get('/', (req, res) => {
        // Return all cats currently up for adoption.
        return res
            .status(200)
            .json(catService.show());
    })

    .delete('/', json, (req, res) => {
        // Remove a pet from adoption.                        
        return res
            .status(204)
            .json(catService.dequeue())
    })


module.exports = catRouter