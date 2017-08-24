const express = require('express');
const colors = require('colors');

module.exports = function(realm) {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    function imagesToArray(realmResult){
      return realmResult.map(x => {
        let asset = JSON.parse(JSON.stringify(x));
        asset.images = JSON.parse(asset.images);
        return asset;
      });
    }

    const router = express.Router();

    router.get('/', (req, res) => {
        return res.json({number: 123});
    });

    router.get('/assets/', (req, res) => {
        console.log(colors.green('[REQ]'),getIP(req), 'load asset filter=', req.query.filter);
          switch(req.query.filter){
            case 'recommend':
              return res.json(imagesToArray(realm.objects('Asset')));
            case 'new':
              let d = new Date();
              d.setDate(d.getDate()-6);
              return res.json(imagesToArray(realm.objects('Asset').filtered('date > $0', d)));
            case 'popular':
              return res.json([{id: '123433', title: '저장된 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail:'/images/thumbnail_test.png' }]);
            case 'linked':
              return res.json([{id: '123433', title: '저장된 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail:'/images/thumbnail_test.png' }]);
            case 'saved':
              return res.json([{id: '123433', title: '저장된 에셋', subTitle: '치킨맥주', star: 3.4, thumbnail:'/images/thumbnail_test.png' }]);
            break;
          }
    });

    router.put('/upload/', (req, res) => {
    console.log(colors.green('[REQ]'),getIP(req), 'upload asset');

      if(!!req.signedCookies.user) {
        console.log(req.signedCookies.user);
          return realm.write(() => {
             realm.create('Asset', {
              id: realm.objects('Asset').length,
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
              return res.status(200).end('Success upload asset!');
            });
        }else{
          return res.status(400).end('Not logined');
        }

    });

    return router;

}
