const express = require('express');
var router = express.Router();
const Schedule = require('../models/schedule');

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Schedule.find({}, (err, schedule) => res.send({ schedule: schedule }));
  })
  .post((req, res) => {
    let schedule = new Schedule(req.body);
    schedule.save();
    res.send(201, { schedule: schedule })
  });

module.exports = router;