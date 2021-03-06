/* eslint-disable max-len */
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

const crowdCountRouter = require('./routes/crowdCountRoute');
// const ticketRouter = require('./routes/ticketRoute');

app.get('/', function (req, res) {
  res.send(
    'Welcome to this API! Navigate to /api/v1/count to view the results!'
  );
});
app.use('/api/v1/count', crowdCountRouter);
// app.use('/api/v1/tickets', ticketRouter);
module.exports = app;
