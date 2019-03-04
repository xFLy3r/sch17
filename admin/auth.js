const express = require("express");
const config = require("../config/configuration.service");
var router = express.Router();
var isLogged = true;

router.get("/status", (req, res) => {
	res.send({ "isLogged": isLogged })
});

router.post("/login", (req, res) => {
	if (req.body.login === config.admin.login &&
    req.body.password === config.admin.password && !isLogged) {
		isLogged = true;
	}
	isLogged ? res.send({status: "OK"}).status(200):res.send({status: "Login or password is incorrect"}).status(500);
});

router.post("/logout", (req, res) => {
	if (req.body.login === config.admin.login &&
        req.body.password === config.admin.password && isLogged) {
		isLogged = false;
		res.sendStatus(200);
	}
});

module.exports = router.use("/", router);