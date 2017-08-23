const express = require('express');
const colors = require('colors');
const Realm = require('realm');

const AssetSchema = {
  name: 'Asset',
  primaryKey: 'id',
  properties: {
    id: { type: 'int' },
    title: { type: 'string' },
    subTitle: { type: 'string' },
    star: { type: 'float' },
    openToStore: { type: 'boolean' },
    thumbnail: { type: 'string' },
    images: { type: 'list', objectType: 'string' },
    content: { type: 'string' },
    price: { type: 'int' },
    license: { type: 'string' }
  }
};

module.exports = function () {

  function getIP(req) {
    return req.connection.remoteAddress.split(":").pop();
  }

  const router = express.Router();

  router.get('/', (req, res) => {
    return res.json({ number: 123 });
  });

  router.get('/assets/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'load asset filter=', req.query.filter);
    let result = [];
    switch (req.query.filter) {
      case 'recommend':
        result = [{ id: '123433', title: '심플한 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail: '/images/thumbnail_test.png' }];
        break;
      case 'new':
        result = [{ id: '123433', title: '새로운 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail: '/images/thumbnail_test.png' }];
        break;
      case 'popular':
        result = [{ id: '123433', title: '유명한 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail: '/images/thumbnail_test.png' }];
        break;
      case 'liked':
        result = [{ id: '123433', title: '좋아한 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail: '/images/thumbnail_test.png' }];
        break;
      case 'saved':
        result = [{ id: '123433', title: '저장된 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail: '/images/thumbnail_test.png' }];
        break;
    }

    return res.json(result);
  });

  router.put('/upload/', (req, res) => {
    console.log(colors.green('[REQ]'), getIP(req), 'upload asset', req.query.filter);

    if (typeof req.cookies['user'] !== 'undefined') {
      return Realm.open({ schema: [AssetSchema] }).then(realm => {
        return realm.write(() => {
          realm.create('Asset', {
            id: realm.objects('Asset').length,
            title: req.body.title,
            subTitle: req.cookies['connect.sid'].user.name,
            star: 0,
            openToStore: req.body.openToStore,
            thumbnail: req.body.thumbnail,
            images: req.body.images,
            content: req.body.content,
            price: req.body.price,
            license: req.body.license
          });
          return res.status(200).end('Success upload asset!');
        });
      });
    } else {
      return res.status(400).end('Not logined');
    }
  });

  return router;
};