const app = require('express')();

app.get('/', (req, res) => {
    res.send({name: 'message'});
});

app.listen(4201, () => {console.log('application is running on port 4201.')});