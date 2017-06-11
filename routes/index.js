module.exports = function(app)
{
    app.get('/', function(req,res){

        res.end();
    });

    app.get('/api/login', function(req, res){
      Book.findOne({email: req.body.email, password: req.body.password}, function(err, user){
        if(err) return res.status(500).json({error: err});
        if(!user) return res.status(404).json({error: 'book not found'});
        res.json(user);
      })
    });

    app.get('/api/register', function(req, res){
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;

      user.save(function(err){
          if(err){
            console.error(err);
            res.json({result: 0});
            return;
          }
          res.json({result: 1});
              res.end();
      });
    });

    app.put('/api/modifypwd', function(req, res){
    Book.findOne({email: req.body.email, password: req.body.password }, function(err, user){
        if(err) return res.status(500).json({ error: 'database failure' });
        if(!user) return res.status(404).json({ error: 'book not found' });

        if(req.body.newPassword) user.password = req.body.newPassword;

        user.save(function(err){
            if(err) res.status(500).json({error: 'failed to update'});
            res.json({message: 'book updated'});
        });

    });
});

}
