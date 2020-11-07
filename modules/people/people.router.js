const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router
.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res
    .status(200)
    .json(People.get());
})

.delete('/', json, (req, res) => {
  // Remove a pet from adoption.                        
  return res
      .status(204)
      .json(People.dequeue())
})

.post('/', json, (req, res) => {  
  // Add a new person to the queue.  
  const { name } = req.body; 
  if (!name) {
    return res
      .status(400)
      .send('Name required');
  }
  
  People.enqueue(name)
  // return the updated queue.
  res
    .status(201)
    .json(People.get());
  
})

module.exports = router
