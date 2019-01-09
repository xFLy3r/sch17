const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')();
const config = require('../config/configuration.service');
const routes = config.routes;

const data = require('./data');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

app.get(routes.homepage, (req, res) => {
    res.send({news: data['news']});
});

app.get(routes.news, (req, res) => {
    res.send({news: data['news']});
});

app.get(routes.schedule, (req, res) => {
    res.send({schedule: data['schedule']});
});

app.get(routes.teachers, (req, res) => {
    res.send({teachers: data['teachers']});
});

app.get(routes.books, (req, res) => {
    res.send({books: data['books']});
});

let isLogged = false;

app.get(routes.admin.status, (req, res) => {
    res.send({ "isLogged": isLogged })
});

app.post(routes.admin.login, (req, res) => {
    if (req.body.login === config.admin.login &&
    req.body.password === config.admin.password && !isLogged) {
        isLogged = true;
        console.log(req.ip);
    }
    isLogged ? res.send({status: "OK"}).status(200):res.send({status: "Login or password is incorrect"}).status(500);
});

app.post(routes.admin.logout, (req, res) => {
    if (req.body.login === config.admin.login &&
        req.body.password === config.admin.password && isLogged) {
        isLogged = false;
        res.sendStatus(200);
    }
});

app.post(routes.admin.createPost, (req, res) => {
    if (req.body.title === undefined || req.body.text === undefined || !isLogged) {
        res.sendStatus(500);
    } else if (isLogged) {
        data['news'].push({"title": req.body.title, "text": req.body.text, "date": Date()});
        res.status(202).send({"title": req.body.title, "text": req.body.text, "date": Date()});
    }
});

// TODO: change hometasks or schedule

app.listen(config.application.port, () => { console.log(`application is running on port ${config.application.port}.`) });
