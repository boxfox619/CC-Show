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
        if(!!req.signedCookies.user){
          res.sendFile(path.resolve('public/pptlist.html'));
        }else{
          res.redirect('/');
        }
    });

    router.get('/test', (req, res) => {
      console.log('start');
      let shows = realm.objects('Show');
      for(let i = 0;i < shows.length;i++){
        let slides = JSON.parse(shows[i].slides);
        for(let j = 0;j < slides.length;j++){
          for(let k = 0; k <slides[j].assets.length; k++){
            if(slides[j].assets[k].type=='ASSET_TYPE_IMAGE'){
              let value = slides[j].assets[k].value;
              let name = shows[i].id+slides[j].id+''+slides[j].assets[k].id+new Date().getTime()+'.';
              let header = value.substring(0, (value.length>20)?20:value.length);
              let check = false;
              if(header.includes('png')){
                name += 'png';
                value = value.replace(/^data:image\/png;base64,/, "");
                check = true;
              }else if(header.includes('jpeg')){
                name += 'jpg';
                value = value.replace(/^data:image\/jpeg;base64,/, "");
                check = true;
              }
              if(check){
                slides[j].assets[k].value = '/assetimage/'+name;
                console.log(slides[j].assets[k]);
                require("fs").writeFile(path.join(__dirname, '../../public/resources/assetimage/'+name), value, 'base64', function(err) {
                  if(err){
                    console.log(err);
                  }else{
                    console.log('/assetimage/'+name);
                  }
                });
              }
            }
          }
        }
          realm.write(() => {
            shows[i].slides = JSON.stringify(slides);
          });
      }
      return res.status(200).end('asd');
    });

    router.get('/play/', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'slideshow');
      let showId = req.query.show;
      let show = realm.objects('Show').filtered('id = "'+showId+'"');
      if(show.length>0){
        res.sendFile(path.resolve('public/slideshow.html'));
      }else{
        return res.status(400).end('Not found this show');
      }
    });

    router.post('/play/', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'slideshow');
      let showId = req.body.showId;
      let show = realm.objects('Show').filtered('id = "'+showId+'"');
      if(show.length>0){
        res.json(slideArrayToJson(show[0]).slides);
      }else{
        return res.status(400).end('Not found this show');
      }
    });

    router.post('/delete/', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'slideshow');
      let showId = req.body.id;
        if(!!req.signedCookies.user){
          let show = realm.objects('Show').filtered('id = "'+showId+'"');
          if(show.length>0){
            if(show[0].user == JSON.parse(req.signedCookies.user).id){
            return realm.write(() => {
              realm.delete(show[0]);
              return res.status(200).end('Success');
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

    router.get('/data/', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'look up show data');
      let showId = req.query.id;
        if(!!req.signedCookies.user){
          let show = realm.objects('Show').filtered('id = "'+showId+'"');
          if(show.length>0){
            if(show[0].user == JSON.parse(req.signedCookies.user).id){
              let email = JSON.parse(req.signedCookies.user).id;
              let nickname = JSON.parse(req.signedCookies.user).name;
              let profile = '/images/ic_cc_show.png';
              return res.json({showData: slideArrayToJson(show[0]), account:{email, nickname, profile}})
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
        let showArr = shows.map(item => {
          let show = slideArrayToJson(item);
          let thumbnail = (show.slides.length>0)? show.slides[0].thumbnail:undefined;
          return {
            name : show.name,
            id : show.id,
            thumbnail
          }
        })
        return res.json(showArr);
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

    router.post('/data', (req, res) => {
    console.log(colors.green('[REQ]'),getIP(req), 'show data save', req.body.showId);
      let showId = req.body.showId;
      if(showId==null) return res.status(400).end('parameter error');
        if(!!req.signedCookies.user){
          let show = realm.objects('Show').filtered('id = "'+showId+'"');
          if(show.length>0){
            if(show[0].user == JSON.parse(req.signedCookies.user).id){
              return realm.write(() => {
                show[0].name = req.body.showData.name;
                show[0].sizeUnit = req.body.showData.sizeUnit;
                show[0].positionUnit = req.body.showData.positionUnit;
                show[0].selectedSlide = req.body.showData.selectedSlide;
                show[0].slideIdCount = req.body.showData.slideIdCount;
                show[0].slides = JSON.stringify(req.body.showData.slides);
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
