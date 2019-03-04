const express = require("express");
var router = express.Router();
const Teachers = require("../models/teachers");

router.get("/", (req, res) => {
	Teachers.find({}, (err, teachers) => res.send({ teachers: teachers }));
});

router.post("/", (req, res) => {
	let teachers = new Teachers(req.body);
	teachers.save();
	res.send(201, { teachers: teachers })
});

module.exports = router.use("/teachers", router);