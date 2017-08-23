const express = require('express');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const app = express();
const port = 3000;
const devPort = 3001;


if(process.env.NODE_ENV == 'development') {
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
app.use('/account', account());
const store = require('./routes/store');
app.use('/store', store());

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
