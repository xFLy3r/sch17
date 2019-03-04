const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors")();
const morgan = require("morgan");
const config = require("../config/configuration.service");
const admin = require("../admin/router");
const mongoose = require("mongoose");
const api = require("../api/router");

mongoose
  .connect('mongodb://mongodb:27017/sch17', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(morgan(":method :url :status - :response-time ms"));

app.use('/api', apiRouter);
app.use('/admin', adminRouter);

// TODO: change hometasks or schedule

app.listen(
	config.application.port,
	() => console.log(`application is running on port ${config.application.port}.`)
);
