const mongoose = require('mongoose');
const config = require('../config');

const url = config.database.mongodb_atlas.url;

mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to Mongodb Atlas');
  })
  .catch((error) => {
    console.log(error);
  });
