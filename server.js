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

app.get('/start-stream', (req, res) => {
  res.json({
    msg: 'started'
  });
});

const server = http.createServer(app);
server.listen(PORT, () => {
  const address = server.address();
  let {port} = address;
  console.log(`Listening on port: ${port}`);
}).on('error', err => {
  console.log(err);
});