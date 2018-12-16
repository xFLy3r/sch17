const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')();

const data = require('./data');
const baseUrl = '/api/';
const port = 4201;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);

app.get(`${baseUrl}`, (req, res) => {
    res.send({news: data['news']});
});

app.get(`${baseUrl}news`, (req, res) => {
    res.send({news: data['news']});
});

app.post(`${baseUrl}news`, (req, res) => {
    if (req.body.title === undefined || req.body.text === undefined) {
        res.status(500).send({});
    } else {
        data['news'].push({"title": req.body.title, "text": req.body.text, "date": Date()});
        res.status(202).send({"title": req.body.title, "text": req.body.text, "date": Date()});
    }
});

app.get(`${baseUrl}schedule`, (req, res) => {
    res.send({news: data['schedule']});
});

app.get(`${baseUrl}teachers`, (req, res) => {
    res.send({news: data['teachers']});
});

app.get(`${baseUrl}books`, (req, res) => {
    res.send({news: data['books']});
});

app.listen(port, () => { console.log(`application is running on port ${port}.`) });
