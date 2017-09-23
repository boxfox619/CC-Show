const express = require('express');

const crypto = require('crypto');

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
            let show = JSON.parse(JSON.stringify(x));
            show.slides = JSON.parse(show.slides);
            return show;
          });
        }

    router.get('/', (req, res) => {
      if(!!req.signedCookies.user){
        let shows = realm.objects('Slide').filtered('user = "'+req.signedCookies.user.key+'"');
        return res.json(slidesToArray(shows)});
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.get('/create', (req, res)=>{
      console.log(colors.green('[REQ]'),getIP(req), 'slide create');
        if(!!req.signedCookies.user){
        let showId = randomShowId(SHOW_ID_LENGTH);
          while(realm.objects('Slide').filtered('id = "'+showId+'"').length>0){
            showId = randomShowId(SHOW_ID_LENGTH);
          }
          return realm.write(() => {
            let show = realm.create('Show', {
              id: showId,
              user: req.signedCookies.user.id
            });
            return res.json(slidesToArray(show));
          });
        }else{
          return res.status(400).end('You need login');
        }
    });

    router.post('/save', (req, res) => {
    console.log(colors.green('[REQ]'),getIP(req), 'show data save', req.body.showId);
      let showId = req.body.showId;
      let show = realm.objects('Slide').filtered('id = "'+showId+'"');
      return realm.write(() => {
        show[0].name = req.body.name;
        show[0].sizeUnit = req.body.sizeUnit;
        show[0].positionUnit = req.body.positionUnit;
        show[0].selectedSlide = req.body.selectedSlide;
        show[0].slideIdCount = req.body.slideIdCount;
        show[0].slides = JSON.stringify(req.body.slides);
        return res.json(slidesToArray(show));
      });
    });

}
