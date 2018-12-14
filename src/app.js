const app = require('express')();
const data = require('data');

app.get('/', (req, res) => {
    res.send({news: data['news']});
});

app.listen(4201, () => {console.log('application is running on port 4201.')});