const express = require('express');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const realm = require('./realm');

const app = express();
const port = 3000;
const devPort = 3001;

app.use(bodyParser.json());
app.use(cookieParser("secret"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cookie, Origin, X-Requested-With, Content-Type");
    res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS, HEAD, CONNECT');
    next();
});

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));

const account = require('./routes/account');
app.use('/account', account(realm));
const store = require('./routes/store');
app.use('/store', store(realm));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});