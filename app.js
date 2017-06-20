var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://127.0.0.1:27017/ppt');

var User = require('./models/user');


app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;

var router = require('./routes')(app, User);
var router = require('./routes/assets')(app, User);

var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
