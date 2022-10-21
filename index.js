const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
// Middlewares
app.use(cors())

// Data
let books = {
    "books": [
      {
        "author": "Gabo", 
        "description": "Good one", 
        "id": 1, 
        "title": "La hojarasca"
      }, 
      {
        "author": "Gabo", 
        "description": "Interesting", 
        "id": 2, 
        "title": "El coronel no tiene quien le escriba"
      }
    ]
  }

// To get all the books
app.get('/books', (req, res) => {
    res.json(books);
});

// For testing: curl -i -H "Content-Type: application/json" -X POST -d '{"title":"El libro"}' http://192.168.56.3:5000/books
app.post('/books', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
})

// Edit a Book
// For testing: curl -i -H "Content-Type: application/json" -X PUT -d '{"author":"Jorgito"}' http://localhost:5000/books/2
app.delete('/books/<book_id>', (req, res) => {
    theBook = {};

    theBook['title'] = req.query.title || '';
    theBook['description'] = req.query.description || '';
    theBook['author'] = req.query.author ||  '';

    for (let i = 0; i < books.length(); i++) {
        if (books[i].id == book_id) {
            books[i] = theBook;
        }
    }

    res.json(theBook);
})

app.listen(port, () => {
  console.log('Server listening on port %d', port);
})
