const express = require('express');
const colors = require('colors');

module.exports = function (realm) {

  function getIP(req) {
    return req.connection.remoteAddress.split(":").pop();
  }

  function imagesToArray(realmResult) {
    return realmResult.map(x => {
      let asset = JSON.parse(JSON.stringify(x));
      asset.images = JSON.parse(asset.images);
      return asset;
    });
  }

  const router = express.Router();

  router.get('/', (req, res) => {
    return res.json({ number: 123 });
  });

  router.get('/assets/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'load asset filter=', req.query.filter);
    switch (req.query.filter) {
      case 'recommend':
        return res.json(imagesToArray(realm.objects('Asset')));
      case 'new':
        let d = new Date();
        d.setDate(d.getDate() - 6);
        return res.json(imagesToArray(realm.objects('Asset').filtered('date > $0', d)));
      case 'popular':
        let assets = imagesToArray(realm.objects('Asset'));
        assets = assets.sort((a, b) => {
          return b.view - a.view;
        }).slice(0, assets.length > 30 ? 30 : assets.length);
        return res.json(assets);
      case 'liked':
        return res.json(imagesToArray(realm.objects('Asset')));
      case 'saved':
        return res.json(imagesToArray(realm.objects('Asset')));
        break;
    }
  });

  router.get('/lookup/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'asset lookup', req.query.asset);
    if (!!req.query.asset) {
      return realm.write(() => {
        realm.objects('Asset').filtered('id=' + req.query.asset)[0].view += 1;

        //lookup data to response
        return res.status(200).end('Success asset lookup');
      });
    } else {
      return res.status(400).end("Asset doesn't exists!");
    }
  });

  router.post('/new/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'new asset');
    if (!!req.signedCookies.user) {
      return realm.write(() => {
        let id = realm.objects('AssetScript').length;
        realm.create('Asset', {
          id,
          subTitle: JSON.parse(req.signedCookies.user).name,
          date: new Date()
        });
        return res.json({ id });
      });
    } else {
      return res.status(400).end('You need login');
    }
  });

  /* simple asset */

  //create 호출
  //asset/simple/update/ post html, css, js
  router.get('/simple/create/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'new asset');
    let id = realm.objects('SimpleAsset').length;
    return realm.write(() => {
      realm.create('SimpleAsset', {
        id
      });
      return res.json({ id });
    });
  });

  router.post('/simple/update/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'asset update', req.body.id, req.body.target);
    if (!!req.signedCookies.user) {
      if (!!req.body.id && realm.objects('SimpleAsset').filtered('id=$0', req.body.id).length > 0) {
        let asset = realm.objects('SimpleAsset').filtered('id=$0', req.body.id)[0];
        return realm.write(() => {
          asset.css = req.body.css;
          asset.js = req.body.js;
          asset.html = req.body.html;
          return res.status(200).end();
        });
      } else {
        return res.status(400).end('Target not found');
      }
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.get('/simple/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'asset lookup', req.query.id);
    if (!!req.query.id && realm.objects('SimpleAsset').filtered('id=$0', parseInt(req.query.id)).length > 0) {
      let asset = realm.objects('SimpleAsset').filtered('id=$0', parseInt(req.query.id))[0];
      let html = '<style>' + asset.css + '</style>' + asset.html + '<script>' + asset.js + '</script>';
      return res.json({ code: html });
    } else {
      return res.status(400).end('Target not found');
    }
  });
  /* simple asset end */

  router.put('/update/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'asset update', req.body.id, req.body.target);
    if (!!req.signedCookies.user) {
      if (!!req.body.id && realm.objects('Asset').filtered('id=$0', req.body.id).length > 0) {
        let asset = realm.objects('Asset').filtered('id=$0', req.body.id);
        if (asset.subTitle === JSON.parse(req.signedCookies.user).name) {
          return realm.write(() => {
            asset[req.body.target] = req.body.data;
            return res.status(200).end();
          });
        } else {
          return res.status(400).end('You are not own this asset');
        }
      } else {
        return res.status(400).end('Target not found');
      }
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.put('/html/', (req, res) => {
    if (!!req.signedCookies.user) {
      if (!!req.body.id && realm.objects('AssetScript').filtered('id=$0', req.body.id).length > 0) {
        let asset = realm.objects('Asset').filtered('id=$0', req.body.id);
        if (asset.subTitle === JSON.parse(req.signedCookies.user).name) {
          return realm.write(() => {
            realm.objects('AssetScript').filtered('id=$0', req.body.id).html = req.body.html;
            return res.status(200).end();
          });
        } else {
          return res.status(400).end('You are not own this asset');
        }
      } else {
        return res.status(400).end('Target not found');
      }
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.put('/css/', (req, res) => {
    if (!!req.signedCookies.user) {
      if (!!req.body.id && realm.objects('AssetScript').filtered('id=$0', req.body.id).length > 0) {
        let asset = realm.objects('Asset').filtered('id=$0', req.body.id);
        if (asset.subTitle === JSON.parse(req.signedCookies.user).name) {
          return realm.write(() => {
            realm.objects('AssetScript').filtered('id=$0', req.body.id).css = req.body.css;
            return res.status(200).end();
          });
        } else {
          return res.status(400).end('You are not own this asset');
        }
      } else {
        return res.status(400).end('Target not found');
      }
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.put('/js/', (req, res) => {
    if (!!req.signedCookies.user) {
      if (!!req.body.id && realm.objects('AssetScript').filtered('id=$0', req.body.id).length > 0) {
        let asset = realm.objects('Asset').filtered('id=$0', req.body.id);
        if (asset.subTitle === JSON.parse(req.signedCookies.user).name) {
          return realm.write(() => {
            realm.objects('AssetScript').filtered('id=$0', req.body.id).js = req.body.js;
            return res.status(200).end();
          });
        } else {
          return res.status(400).end('You are not own this asset');
        }
      } else {
        return res.status(400).end('Target not found');
      }
    } else {
      return res.status(400).end('You need login');
    }
  });

  return router;
};