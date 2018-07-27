const express = require('express');
const colors = require('colors');

module.exports = function(realm) {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();

    router.get('/', (req, res) => {
        return res.json({number: 123});
    });

    router.get('/assets/', (req, res) => {
        console.log(colors.green('[REQ]'),getIP(req), 'load asset filter=', req.query.filter);
        switch(req.query.filter){
          case 'recommend':
            return res.json(simpleImagesToArray(realm.objects('Asset').sorted('id',true)));
          case 'new':
            return res.json(simpleImagesToArray(realm.objects('Asset').sorted('id',true)));
          case 'popular':
            return res.json(simpleImagesToArray(realm.objects('Asset').sorted('id',true)));
          case 'liked':
            return res.json(simpleImagesToArray(realm.objects('Asset').sorted('id',true)));
          case 'saved':
            return res.json(simpleImagesToArray(realm.objects('Asset').sorted('id',true)));
        }

          // switch(req.query.filter){
          //   case 'recommend':
          //     return res.json(imagesToArray(realm.objects('Asset')));
          //   case 'new':
          //     let d = new Date();
          //     d.setDate(d.getDate()-6);
          //     return res.json(imagesToArray(realm.objects('Asset').filtered('date > $0', d)));
          //   case 'popular':
          //     let assets = imagesToArray(realm.objects('Asset'));
          //       assets = assets.sort((a,b)=>{return b.view-a.view}).slice(0, (assets.length>30)?30:assets.length);
          //     return res.json(assets);
          //   case 'liked':
          //     return res.json(imagesToArray(realm.objects('Asset')));
          //   case 'saved':
          //     return res.json(imagesToArray(realm.objects('Asset')));
          //   break;
          // }
    });

    router.get('/lookup/', (req, res) => {
    console.log(colors.green('[REQ]'),getIP(req), 'asset lookup', req.query.assetId);
      if(!!req.query.assetId){
        return realm.write(()=>{
          let asset = realm.objects('Asset').filtered('id='+req.query.assetId)[0];
          asset.view += 1;
          let copiedAsset = JSON.parse(JSON.stringify(asset));
          copiedAsset.thumbnails = asset.thumbnails.map(strObj => strObj.value);
          copiedAsset.tags = asset.tags.map(strObj => strObj.value);
          return res.json(copiedAsset);
        });
      }else{
        return res.status(400).end("Asset doesn't exists!");
      }
    });

    router.post('/create/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'new asset');
      if(!!req.signedCookies.user){
          return realm.write(()=>{
            let id = realm.objects('Asset').length;
             realm.create('Asset', {
              id,
              user: JSON.parse(req.signedCookies.user).id,
              date: new Date()
            });
            realm.create('AssetScript', { id });
            return res.json({id});
          });
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.put('/update/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'asset update', req.body.assetId);
      if(!!req.signedCookies.user){
          if(!!req.body.assetId&&realm.objects('Asset').filtered('id=$0',req.body.assetId).length>0){
            if(req.body.assetId){
              let asset = realm.objects('Asset').filtered('id=$0',req.body.assetId)[0];
              if(asset.user===JSON.parse(req.signedCookies.user).id){
                  return realm.write(() => {
                      asset.title = req.body.title;
                      asset.openToStore = req.body.openToStore;
                      asset.thumbnails = req.body.thumbnails.map(url => {value: url});
                      asset.tags = req.body.tags.map(tag => {value: tag});
                      asset.css = req.body.css;
                      asset.js = req.body.js;
                      asset.html = req.body.html;
                      return res.status(200).end();
                  });
              }else{
                return res.status(400).end('You are not own this asset');
              }
            }else{
              let id = realm.objects('Asset').length;
               realm.create('Asset', {
                   id,
                   user: JSON.parse(req.signedCookies.user).id,
                   date: new Date(),
                   title: req.body.title,
                   openToStore: req.body.openToStore,
                   thumbnails: req.body.thumbnails.map(url => {value: url}),
                   content: req.body.content,
                   tags: req.body.tags.map(tag => {value: tag}),
                   css: req.body.css,
                   js: req.body.js,
                   html: req.body.html
              });
            }

          }else{
            return res.status(400).end('Target not found');
          }
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.delete('/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'delete asset');
      if(!!req.signedCookies.user){
          return realm.write(()=>{
            let asset = realm.objects('Asset').filtered('id='+req.query.assetId)[0];
            realm.delete(asset);
            return res.status(200).end();
          });
      }else{
        return res.status(400).end('You need login');
      }
    });


    return router;

}
