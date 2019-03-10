const express = require('express');
var router = express();
const Teacher = require('../models/teachers');

let getValidationErrors = (errors) => {
  let newErrors = [];
  for (let error in errors)
    newErrors.push(errors[error].message);
  return newErrors;
};

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    Teacher.find({}, '-__v', (err, teachers) => res.send({ teachers: teachers }));
  })
  .post((req, res) => {
    let teacher = new Teacher(req.body);
    teacher.save((err) => {
      if (err) {
        res.status(422).send({ errors: getValidationErrors(err.errors)});
      } else {
        res.status(201).send(teacher);
      }
    });
  });

router.param('teacherId', (req, res, next, id) => {
  Teacher.findById(id, '-__v', (err, teacher) => { //TODO: FIX THIS
    if (err || !teacher) {
      res.status(404).send({ message: 'Not found' });
    } else {
      req.teacher = teacher;
    }
    next();
  });
});

router.route('/:teacherId')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.send(req.teacher);
  })
  .put((req, res, next) => {
    let teacher = req.teacher;
    teacher.name = req.body.name;
    teacher.subject = req.body.subject;
    teacher.save((err) => {
      if (err) {
        res.status(422).send({ errors: getValidationErrors(err.errors)});
      } else {
        res.status(204).send({});
      }
    });
  })
  .delete((req, res, next) => {
    Teacher.deleteOne({ _id: req.teacher._id }, (e, r) => {
      if (!e) {
        res.send({ message: `Teacher with id ${req.teacher._id} was successfully deleted.` })
      } else {
        res.status(500).send({ message: 'Something went wrong.' })
      }
    })
  });

module.exports = router;
