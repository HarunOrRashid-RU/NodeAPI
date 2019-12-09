const express = require('express');
const tourRouter = require('./routes/tourRoute');
const app = express();

//Middleware
app.use(express.json());

//Route
app.use('/api/v1/posts', tourRouter);

//export app
module.exports = app;
