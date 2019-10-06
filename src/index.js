const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const { PORT } = require('./config');
const mongo = require('./mongo');
const errorHandler = require('./middlewares/error_handler');
const errorHelper = require('./helpers/error');
const seederHelper = require('./helpers/seed');

const { Router } = express;
const app = express();

const mongooseConnection = mongo();

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

app.use('/api', routes(Router()));

app.use((err, req, res, next) => errorHandler(err, req, res, next));

app.use((_, res) => res.status(errorHelper('NOT_FOUND').status).json(errorHelper('NOT_FOUND')));

const listen = () => app.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

const startServer = async () => {
  await seederHelper();
  listen();
};


mongooseConnection
  .on('error', console.error)
  .on('disconnected', mongo)
  .once('open', startServer);

module.exports = app;
