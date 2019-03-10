const express = require('express');
var router = express.Router();
const Teachers = require('../models/teachers');

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Teachers.find({}, '-__v', (err, teachers) => res.send({ teachers: teachers }));
  });

module.exports = router;
