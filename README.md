# Petful Server
This is the server side programming for the Petful adoption application.

## Client:
https://github.com/jbarnes439/Petful-Client.git
## Endpoints
### GET /api/cats
Returns the cat located at the top of the cat queue.

    // res.body
    {
        "age": 2,
        "breed": "Bengal",
        "description": "Orange bengal cat with black stripes lounging on concrete.",
        "gender": "Female",
        "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Steve French",
        "story": "Thrown on the street"
    }

### DELETE /api/cats
Removes the cat at the top of the cat queue.
### GET /api/dogs
Gets the dog at the top of the dog queue.

    // res.body
    {
        "age": 3,
        "breed": "Golden Retriever",
        "description": "A smiling golden-brown golden retreiver listening to music.",
        "gender": "Male",
        "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Zim",
        "story": "Owner Passed away"
    }

### DELETE /api/dogs
Removes the dog at the top of the dog queue.
### GET /api/people
Returns all items in the queue of people.

    // res.body
    [
    "Randy Lahey",
    "Trevor Cory",
    "Jim Lahey"
    ]

## Technologies:
  Create-react-app was used to create the front end. The back end utilizes a RESTful API pattern created with express and Node.js.




