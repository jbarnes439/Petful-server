const Queue = require('../queue/Queue')
const store = require('../../store')


// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return pets.dogs.all();
  },

  show() {
    return pets.dogs.show();
},

  dequeue() {
    // Remove a pet from the queue.
    pets.dogs.dequeue();
    // add another dog to the end of the queue
    store.dogs.forEach(dog => pets.dogs.enqueue(dog))
  }
}