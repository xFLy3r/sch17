const app = require('express')();
const bodyParser = require('body-parser');
const data = require('./data');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({news: data['news']});
});

app.get('/news', (req, res) => {
    res.send({news: data['news']});
});

app.post('/news', (req, res) => {
    if (req.body.title === undefined || req.body.text === undefined) {
        res.status(500).send({});
    } else {
        data['news'].push({"title": req.body.title, "text": req.body.text, "date": Date()});
        res.status(202).send({"title": req.body.title, "text": req.body.text, "date": Date()});
    }
});

app.get('/schedule', (req, res) => {
    res.send({news: data['schedule']});
});

app.get('/teachers', (req, res) => {
    res.send({news: data['teachers']});
});

app.get('/books', (req, res) => {
    res.send({news: data['books']});
});

app.listen(4201, () => { console.log('application is running on port 4201.') });