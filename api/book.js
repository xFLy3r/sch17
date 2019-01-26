const express = require('express');
var router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
    Book.find({}, (err, books) => res.send({ books: books }));
});

module.exports = router.use('/books', router);