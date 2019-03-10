const express = require('express');
var router = express.Router();
const Schedule = require('../models/schedule');

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Schedule.find({}, '-__v', (err, schedule) => res.send({ schedule: schedule}));
  });

module.exports = router;
