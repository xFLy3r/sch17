const express = require('express');
var router = express.Router();
const Books = require('../models/books');

router.route('/books')
  .all((req, res, next) => {
      next();
  })
  .get('/', (req, res) => {
      Books.find({}, (err, books) => res.send({ books: books }));
  });

module.exports = router;


// TODO: make idempotent requests(except DELETE)