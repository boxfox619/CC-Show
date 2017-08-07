module.exports = function (app) {
    require('./show');

    app.get('/', function(req,res){

        res.end();
    });
    app.get('/test', function(req, res){
      console.log('asvasv');
      res.end('asvav');
    });

}
