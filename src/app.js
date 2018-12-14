const app = require('express')();
const data = require('./data');

class Article {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.date = Date();
    }
}

app.get('/', (req, res) => {
    res.send({news: data['news']});
});

app.get('/news', (req, res) => {
    res.send({news: data['news']});
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