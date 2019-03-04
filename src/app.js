const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors")();
const morgan = require("morgan");
const config = require("../config/configuration.service");
const admin = require("../admin/router");
const mongoose = require("mongoose");
const api = require("../api/router");
mongoose.connect("mongodb://localhost:27017/sch17", { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use(morgan(":method :url :status - :response-time ms"));

app.use("/api", api);
app.use("/api/admin", admin);


// TODO: change hometasks or schedule

app.listen(
	config.application.port,
	() => console.log(`application is running on port ${config.application.port}.`)
);
