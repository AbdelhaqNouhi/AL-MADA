const express = require('express');
const rateLimit = require("express-rate-limit");
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Limit request from the same API
const limiter = rateLimit({
    max: 150, // 15 minutes
    windowMs: 60 * 60 * 1000,
    message: {
        status: "fail",
        message: "Too many requests from this IP, please try again in an hour!",
    },
});
app.use("/api", limiter);


// Parsing the body of the request.
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

require("./Routes/index.routes")(app, "/api");

// handle undefined Routes
app.use("*", (req, res, next) => {
    const err = new AppError(404, "fail", "undefined route");
    next(err, req, res, next);
});

module.exports = app;