const express = require('express');
var path = require('path');
const crypto = require('crypto');
const colors = require('colors');

const SHOW_ID_LENGTH = 5;

function randomShowId(howMany, chars) {
  chars = chars || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
  var rnd = crypto.randomBytes(howMany),
      value = new Array(howMany),
      len = chars.length;

  for (var i = 0; i < howMany; i++) {
    value[i] = chars[rnd[i] % len];
  };

  return value.join('');
}

module.exports = function (realm) {

  function getIP(req) {
    return req.connection.remoteAddress.split(":").pop();
  }

  const router = express.Router();
  function slidesToArray(realmResult) {
    return realmResult.map(x => {
      let show = JSON.parse(JSON.stringify(x));
      show.slides = JSON.parse(show.slides);
      return show;
    });
  }

  router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pptlist.html'));
  });

  router.get('/list', (req, res) => {
    if (!!req.signedCookies.user) {
      let shows = realm.objects('Show').filtered('user = "' + JSON.parse(req.signedCookies.user).id + '"');
      return res.json(slidesToArray(shows));
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.post('/create', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'slide create');
    if (!!req.signedCookies.user) {
      let showId = randomShowId(SHOW_ID_LENGTH);
      while (realm.objects('Show').filtered('id = "' + showId + '"').length > 0) {
        showId = randomShowId(SHOW_ID_LENGTH);
      }
      return realm.write(() => {
        let show = realm.create('Show', {
          id: showId,
          name: req.body.name,
          user: JSON.parse(req.signedCookies.user).id
        });
        return res.json(show);
      });
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.post('/save', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'show data save', req.body.showId);
    let showId = req.body.showId;
    let show = realm.objects('Show').filtered('id = "' + showId + '"')[0];
    return realm.write(() => {
      show.name = req.body.name;
      show.sizeUnit = req.body.sizeUnit;
      show.positionUnit = req.body.positionUnit;
      show.selectedSlide = req.body.selectedSlide;
      show.slideIdCount = req.body.slideIdCount;
      show.slides = JSON.stringify(req.body.slides);
      return res.json(slidesToArray(show));
    });
  });
  return router;
};