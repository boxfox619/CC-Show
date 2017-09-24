const express = require('express');
const colors = require('colors');
const request = require('request');
const path = require('path');

const CLIENT_ID = '201742033376-s4258t2qoo2be1aej3lb1qturs6kgsp3.apps.googleusercontent.com';

const FACEBOOK_ACCESSTOKEN_CHECK_URL = 'https://graph.facebook.com/oauth/access_token_info?access_token=';
const GOOGLE_ACCESSTOKEN_CHECK_URL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=';

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

    function setCookie(res, user){
      return res.cookie('user',JSON.stringify({
        "name": user.nickname,
        "id": user.id,
        "status": "user"
      }), {'signed': true});
    }

    const router = express.Router();


    router.get('/check/', (req, res)=>{
        console.log(colors.green('[REQ]'), 'account check', getIP(req));
        res.json({result: !!req.signedCookies.user});
    });

    router.get('/logout/', (req, res)=>{
        console.log(colors.green('[REQ]'), 'logout', getIP(req));
        res.clearCookie("user");
        res.redirect('/');
    });

    router.post('/login/', (req, res) => {
      console.log(req.body.id);
        console.log(colors.green('[REQ]'), 'login', getIP(req));
          let user = realm.objects('User').filtered('id = "'+req.body.id+'"');
          if(user.length==0){
            return res.status(500).end('존재하지 않는 아이디 입니다!');
          }
          if(user[0].password!==req.body.password){
            return res.status(400).end('비밀번호가 일치하지 않습니다!');
          }
          return setCookie(res, user[0]).status(200).end();
    });

    router.post('/register/', (req, res) => {
        console.log(colors.green('[REQ]'), 'register', getIP(req));
          if(realm.objects('User') .filtered('id = "'+req.body.id+'"').length>0){
            return res.status(500).end('이미 존재하는 유저 입니다.');
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
            return res.status(200).end('회원가입에 성공했습니다.');
          });
    });

    function snsAccountJob(req, res){
        let randomKey = randomToken(20);
        let user = realm.objects('User').filtered('id = "'+req.body.email+'"');
        if(user.length>0){
          setCookie(res, user[0]);
          return 200;
        }else{
          try{
            return realm.write(() => {
              let user = realm.create('User', {
                key: randomKey,
                id: req.body.email,
                nickname: req.body.name
              });
                setCookie(res, user);
              return 200;
            });
          }catch(e){
            console.log(e);
            return 400;
          }
        }
    }

    router.post('/facebook/', (req, res) => {
        console.log(colors.green('[REQ]'), 'facebook', getIP(req));
      let checkUrl = FACEBOOK_ACCESSTOKEN_CHECK_URL+ req.body.accessToken;
      request(checkUrl, function (error, response, body) {
        let result = ()=>{
        if(error || JSON.parse(body).error){
          return 400;
        }else{
          return snsAccountJob(req, res);
        }};
        res.status(result()).end();
      });
    });

    router.post('/google/', (req, res) => {
        console.log(colors.green('[REQ]'), 'google', getIP(req));
      let checkUrl = GOOGLE_ACCESSTOKEN_CHECK_URL+ req.body.accessToken;
      let result = request(checkUrl, function (error, response, body) {
        let result = ()=>{
        if(error || JSON.parse(body).error_description){
          return 400;
        }else{
          return snsAccountJob(req, res);
        }};
        res.status(result()).end();
      });
    });

    return router;

}
