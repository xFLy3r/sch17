const express = require('express');
var router = express.Router();
const Books = require('../models/books');

router.get('/', (req, res) => {
    Books.find({}, (err, books) => res.send({ books: books }));
});

module.exports = router.use('/books', router);