const express = require('express');
const json = require('body-parser').json();

const dogService = require('./dog-service');
const People = require('../people/people.service');


const dogRouter = express.Router();

dogRouter
    .get('/', (req, res) => {
        // Return all cats currently up for adoption.
        return res
            .status(200)
            .json(dogService.get());
    })

    .delete('/', json, (req, res) => {
        // Remove a pet from adoption.                        
        return res
            .status(204)
            .json(dogService.dequeue());
    })


module.exports = dogRouter;