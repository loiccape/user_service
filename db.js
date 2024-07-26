const mongoose = require('mongoose');
const { mongoURI } = require('./config');

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
