const express = require('express');
var router = express();
const Book = require('../models/books');

let getValidationErrors = (errors) => {
  let newErrors = [];
  for (let error in errors)
    newErrors.push(errors[error].message); // TODO: Remove this from all controllers and move to separate method
  return newErrors;
};

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Book.find({}, '-__v', (err, books) => res.send({ books: books }));
  })
  .post((req, res) => {
    let book = new Book(req.body);
    book.save((err) => {
      if (err) {
        res.status(422).send({ errors: getValidationErrors(err.errors)});
      } else {
        res.status(201).send(book);
      }
    });
  });

router.param('bookId', (req, res, next, id) => {
  Book.findById(id, '-__v', (err, book) => { //TODO: FIX THIS
    if (err || !book) {
      res.status(404).send({ message: 'Not found' });
    } else {
      req.book = book;
    }
    next();
  });
});

router.route('/:bookId')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.send(req.book);
  })
  .put((req, res, next) => {
    let book = req.book;
    book.title = req.body.title;
    book.sourcePath = req.body.sourcePath;
    book.imagePath = req.body.imagePath;
    book.save((err) => {
      if (err) {
        res.status(422).send({ errors: getValidationErrors(err.errors)});
      } else {
        res.status(204).send({});
      }
    });
  })
  .delete((req, res, next) => {
    Book.deleteOne({ _id: req.book._id }, (e, r) => {
      if (!e) {
        res.send({ message: `Book with id ${req.book._id} was successfully deleted.` })
      } else {
        res.status(500).send({ message: 'Something went wrong.' })
      }
    })
  });

module.exports = router;
