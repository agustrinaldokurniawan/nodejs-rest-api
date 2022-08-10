const express = require('express');
const app = express();
require('./database');
const cors = require('cors');
const Routes = require('./routes');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(Routes);

module.exports = app;
