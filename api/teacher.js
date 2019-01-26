const express = require('express');
var router = express.Router();
const Teacher = require('../models/teacher');

router.get('/', (req, res) => {
    Teacher.find({}, (err, teacher) => res.send({ teacher: teacher }));
});

router.post('/', (req, res) => {
    let teacher = new Teacher(req.body);
    teacher.save();
    res.send(201, { teacher: teacher })
});

module.exports = router.use('/teacher', router);