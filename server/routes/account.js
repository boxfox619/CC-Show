const express = require('express');
const colors = require('colors');
const Realm = require('realm');

const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    key: {type: 'string'},
    id: {type: 'string', optional: true},
    password: {type: 'string', optional: true},
    nickname: 'string'
  }
};

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

module.exports = function() {

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

        return res.json({number: 123});
    });

    router.post('/register/', (req, res) => {
        console.log(colors.green('[REQ]'), 'register', getIP(req));
        Realm.open({schema: [UserSchema]}).then(realm => {
          realm.write(() => {
            let user = realm.create('User', {
              key: generateUniqueId(),
              id: req.body.id,
              password: req.body.password,
              nickname: req.body.nickname
            });
          });
        });
        return res.json({number: 22});
    });

    return router;

}
