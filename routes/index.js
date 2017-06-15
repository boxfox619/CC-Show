module.exports = function (app, User) {

    app.get('/', function(req,res){

        res.end();
    });

    app.post('/api/login', function (req, res) {
        console.log('login');
      User.findOne({email: req.body.email, password: req.body.password}, function(err, user){
        if(err) return res.status(500).send('Internal server err');
        if(!user) return res.status(404).send('User not found');
        res.status(200).send('Login success!');
      })
    });

    app.post('/api/register', function(req, res){
    var user = new User();
    user.email = req.body['email'];
    user.password = req.body['password'];

      user.save(function(err){
          if(err){
              console.error(err);
              res.status(500).send('Fail Register!');
          }else
          res.status(200).send('Success Register!');
          res.end();
      });
    });

    app.put('/api/modifypwd', function(req, res){
    User.findOne({email: req.body.email, password: req.body.password }, function(err, user){
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
