const routes = require('./Routes/routes');
const { urlencoded } = require('express');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

module.exports = app;