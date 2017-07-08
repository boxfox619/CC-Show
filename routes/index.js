module.exports = function (app) {
    require('./show');

    app.get('/', function(req,res){

        res.end();
    });

}
