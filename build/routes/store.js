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

  router.put('/upload/', (req, res) => {
    if (!!req.signedCookies.user) {
      return realm.write(() => {
        let id = realm.objects('Asset').length;
        realm.create('Asset', {
          id,
          title: req.body.title,
          subTitle: JSON.parse(req.signedCookies.user).name,
          date: new Date(),
          openToStore: req.body.openToStore,
          thumbnail: req.body.thumbnail,
          images: JSON.stringify(req.body.images),
          content: req.body.content,
          price: req.body.price,
          license: req.body.license
        });
        realm.create('AssetScript', { id });
        return res.status(200).end('Success upload asset!');
      });
    } else {
      return res.status(400).end('You need login');
    }
  });

  router.put('/html/', (req, res) => {
    if (!!req.signedCookies.user) {
      if (!!req.body.id && realm.objects('AssetScript').filtered('id=$0', req.body.id).length > 0) {
        return realm.write(() => {
          realm.objects('AssetScript').filtered('id=$0', req.body.id).js = req.body.html;
        });
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
        return realm.write(() => {
          realm.objects('AssetScript').filtered('id=$0', req.body.id).css = req.body.data;
        });
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
        return realm.write(() => {
          realm.objects('AssetScript').filtered('id=$0', req.body.id).js = req.body.data;
        });
      } else {
        return res.status(400).end('Target not found');
      }
    } else {
      return res.status(400).end('You need login');
    }
  });

  return router;
};