const express = require('express');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const realm = require('./realm');
const path = require('path');

const app = express();
const port = 80;
const devPort = 8080;
"use strict";
app.use(bodyParser.json({ limit: '1024mb' }));
app.use(cookieParser("secret"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cookie, Origin, X-Requested-With, Content-Type");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS, HEAD, CONNECT');
  next();
});

console.log(process.env.NODE_ENV == 'development');
if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}
app.use('/', express.static(__dirname + '/../public/resources'));
app.use('/bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: path.join(__dirname, '../public') });
});
app.get('/', (req, res) => {
  res.sendFile('main.html', { root: path.join(__dirname, '../public') });
});

app.get('/editor/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });;
});

const account = require('./routes/account');
app.use('/account', account(realm));
const store = require('./routes/store');
app.use('/store', store(realm));
const show = require('./routes/show');
app.use('/show', show(realm));

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
});