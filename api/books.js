const express = require('express');
var router = express.Router();
const Book = require('../models/books');

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Book.find({}, '-__v', (err, books) => res.send({ books: books}));
  });

module.exports = router;


// TODO: make idempotent requests(except DELETE)