const express = require('express');
var router = express();
const Schedule = require('../models/schedule');

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Schedule.find({}, '-__v', (err, schedule) => res.send({ schedule: schedule }));
  })
  .post((req, res) => {
    // TODO
  });

router.param('scheduleId', (req, res, next, id) => {
  Schedule.findById(id, '-__v', (err, schedule) => {
    if (err || !schedule) {
      res.status(404).send({ message: 'Not found' });
    } else {
      req.schedule = schedule;
    }
    next();
  });
});

router.route('/:scheduleId')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.send(req.schedule);
  })
  .put((req, res, next) => {
    // TODO
  })
  .delete((req, res, next) => {
    // TODO
  });

module.exports = router;
