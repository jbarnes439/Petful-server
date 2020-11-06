class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    // if the queue does not have data, this node is first.
    if (this.first === null) {
      this.first = node;
    }

    /* if the queue has data update, the previous last item 
    to point to this node (FILO) */
    if (this.last) {
      this.last.next = node;
    }
    // new node become last item on queue
    this.last = node;
  }

  dequeue() {
    // Remove some data from the front of the queue. FILO
    if (this.first === null) {
      return;
    }

    // take first item from front of queue
    const node = this.first;
    // move the next item up to the front of the queue
    this.first = this.first.next;
    // if this is the last item set to null
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    // if the queue is empty
    if (this.first === null) {
      return "No items in queue";
    }

    else {
      return this.first.value;
    }
  }

  all() {
    // Return all items in the queue.
    if (this.first === null) {
      return "No items in queue";
    }
    else {
      let tempArr = [];

      let temp = this.first;

      while (temp) {
        // add to temp array
        tempArr.push(temp.value);

        // move to next element
        temp = temp.next;
      }
      return tempArr;
    }
  }
}


/* REMOVE TEST DATA BEFORE PRODUCTION */
// let testQueue = new Queue();

// let turbo = {
//   picture: 'picture url',
//   story: 'Found in a box by a store.',
//   name: 'Turbo',
//   gender: 'male',
//   age: 7,
//   breed: 'heeler mix'
// }
// let sadie = {
//   picture: 'picture url',
//   story: 'Found in a box by a store.',
//   name: 'Sadie',
//   gender: 'female',
//   age: 7,
//   breed: 'Tortoiseshell DLH'
// }

// testQueue.enqueue(turbo);
// testQueue.enqueue(sadie);
// console.log(testQueue.dequeue(turbo));
// console.log(testQueue.show());
// console.log(testQueue.all())


module.exports = Queue
