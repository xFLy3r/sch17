const express = require('express');
var router = express.Router();
const Teachers = require('../models/teachers');

router.route('/')
  .all((req, res, next) => {
      next();
  })
  .get((req, res) => {
      Teachers.find({}, (err, teachers) => res.send({ teachers: teachers }));
  });

module.exports = router;

// TODO: make idempotent requests(except DELETE)
// TODO: move POST request to admin