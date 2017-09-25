const express = require('express');
var path = require('path');
const crypto = require('crypto');
const colors = require('colors');

const SHOW_ID_LENGTH = 5;


function randomShowId(howMany, chars) {
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
        function slidesToArray(realmResult){
          return realmResult.map(x => {
            return slideArrayToJson(x);
          });
        }

        function slideArrayToJson(obj){
            let show = JSON.parse(JSON.stringify(obj));
            show.slides = JSON.parse(show.slides);
            return show;
        }

    router.get('/', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'redirect to pptlist');
      res.sendFile(path.resolve('public/pptlist.html'));
    });

    router.get('/data/', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'look up show data');
      let showId = req.query.id;
        if(!!req.signedCookies.user){
          let show = realm.objects('Show').filtered('id = "'+showId+'"');
          if(show.length>0){
            if(show[0].user == JSON.parse(req.signedCookies.user).id){
              return res.json(slideArrayToJson(show[0]))
            }else{
              return res.status(400).end('You are not own this show');
            }
          }else{
            return res.status(400).end('Not found this show');
          }
        }else{
          return res.status(400).end('You need login');
        }
    });

    router.get('/list', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'look up show list');
      if(!!req.signedCookies.user){
        let shows = realm.objects('Show').filtered('user = "'+JSON.parse(req.signedCookies.user).id+'"');
        return res.json(slidesToArray(shows));
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.post('/create', (req, res)=>{
      console.log(colors.green('[REQ]'),getIP(req), 'show create');
        if(!!req.signedCookies.user){
        let showId = randomShowId(SHOW_ID_LENGTH);
          while(realm.objects('Show').filtered('id = "'+showId+'"').length>0){
            showId = randomShowId(SHOW_ID_LENGTH);
          }
          return realm.write(() => {
            let show = realm.create('Show', {
              id: showId,
              name: req.body.name,
              user: JSON.parse(req.signedCookies.user).id
            });
            return res.json(slideArrayToJson(show));
          });
        }else{
          return res.status(400).end('You need login');
        }
    });

    router.post('/save', (req, res) => {
    console.log(colors.green('[REQ]'),getIP(req), 'show data save', req.body.showId);
      let showId = req.body.showId;
      if(showId==null) return res.status(400).end('parameter error');
        if(!!req.signedCookies.user){
          let show = realm.objects('Show').filtered('id = "'+showId+'"');
          if(show.length>0){
            if(show[0].user == JSON.parse(req.signedCookies.user).id){
              return realm.write(() => {
                show[0].name = req.body.name;
                show[0].sizeUnit = req.body.sizeUnit;
                show[0].positionUnit = req.body.positionUnit;
                show[0].selectedSlide = req.body.selectedSlide;
                show[0].slideIdCount = req.body.slideIdCount;
                show[0].slides = JSON.stringify(req.body.slides);
                return res.json(slideArrayToJson(show[0]));
              });
            }else{
              return res.status(400).end('You are not own this show');
            }
          }else{
            return res.status(400).end('Not found this show');
          }
        }else{
          return res.status(400).end('You need login');
        }

    });
        return router;
}
