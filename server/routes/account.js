const express = require('express');
const colors = require('colors');

var crypto = require('crypto');

function randomToken(howMany, chars) {
    chars = chars
        || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    var rnd = crypto.randomBytes(howMany)
        , value = new Array(howMany)
        , len = chars.length;

    for (var i = 0; i < howMany; i++) {
        value[i] = chars[rnd[i] % len]
    };

    return value.join('');
}

module.exports = function(realm) {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();

    router.get('/', (req, res) => {
      console.log('tesata');
        return res.json({number: 123});
    });

    router.post('/login/', (req, res) => {
        console.log(colors.green('[REQ]'), 'login', getIP(req));
          let user = realm.objects('User').filtered('id = "'+req.body.id+'"');
          if(user.length==0){
            return res.status(500).end('User does not exists!');
          }
          if(user[0].password!==req.body.password){
            return res.status(400).end('Password dose not match!');
          }
          return res.cookie('user',JSON.stringify({
            "name": user[0].nickname,
            "id": user[0].id,
            "status": "user"
          }), {'signed': true}).status(200).end('Login success!');
    });

    router.post('/register/', (req, res) => {
        console.log(colors.green('[REQ]'), 'register', getIP(req));
          if(realm.objects('User') .filtered('id = "'+req.body.id+'"').length>0){
            return res.status(500).end('User already exists.');
          }
          let randomKey = randomToken(20);
          while(realm.objects('User') .filtered('key = "'+randomKey+'"').length>0){
            randomKey = randomToken(20);
          }
          return realm.write(() => {
            let user = realm.create('User', {
              key: randomKey,
              id: req.body.id,
              password: req.body.password,
              nickname: req.body.nickname
            });
            return res.status(200).end('Success the register user');
          });
    });

    return router;

}
