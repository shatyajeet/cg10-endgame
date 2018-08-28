const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const http = require('http');

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  next();
});

app.get('/start-stream', (req, res) => {
  res.json({
    msg: 'started'
  });
});

app.get('/latency', (req, res) => {
  res.status(200).send(new Date().getTime());
});

const server = http.createServer(app);
server.listen(PORT, () => {
  const address = server.address();
  let {port} = address;
  console.log(`Listening on port: ${port}`);
}).on('error', err => {
  console.log(err);
});