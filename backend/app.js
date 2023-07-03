require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// All routes variables

const employee = require("./routes/employee")
const hourRaport = require('./routes/hourRaport')


// middleware
const corsOptions = {
    origin: "http://localhost:3000", // frontend URI (ReactJS)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}

app.use(express.json());

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json({
        msg: "Stenhuse Gard",
    });
});

app.use(`/employees`, employee);

app.use(`/workraport`, hourRaport);

app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

module.exports = app;

