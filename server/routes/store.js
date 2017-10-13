const express = require('express');
const colors = require('colors');

module.exports = function(realm) {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    function simpleImagesToArray(realmResult){
      return imagesToArray(realmResult).map(x => {
        let asset = {
          id: x.id,
          title: x.title,
          user: x.user,
          star: x.star,
          thumbnail: x.thumbnail
        };
        return asset;
      });
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
          return res.json(imagesToArray(asset));
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

    /* simple asset */

    //create 호출
    //asset/simple/update/ post html, css, js
    router.post('/simple/create/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'new asset');
        if(!!req.signedCookies.user){
          let id = realm.objects('SimpleAsset').length;
          return realm.write(()=>{
            realm.create('SimpleAsset', {
              id,
              title: req.body.name,
              user: JSON.parse(req.signedCookies.user).id,
              source : req.body.source,
              thumbnail : req.body.thumbnail
            });
          return res.json({id});
        });
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.get('/simple/', (req, res)=>{
        console.log(colors.green('[REQ]'),getIP(req), 'asset lookup', req.query.id);
        if(!!req.query.id&&realm.objects('SimpleAsset').filtered('id=$0',parseInt(req.query.id)).length>0){
          let asset = realm.objects('SimpleAsset').filtered('id=$0',parseInt(req.query.id))[0];
          let html = asset.source;
          return res.json({code : html});
        }else{
          return res.status(400).end('Target not found');
        }
    });
    /* simple asset end */


    router.put('/update/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'asset update', req.body.assetId);
      if(!!req.signedCookies.user){
          if(!!req.body.assetId&&realm.objects('Asset').filtered('id=$0',req.body.assetId).length>0){
            let asset = realm.objects('Asset').filtered('id=$0',req.body.assetId)[0];
            if(asset.user===JSON.parse(req.signedCookies.user).id){
              return realm.write(()=>{
                asset.title = req.body.title;
                asset.openToStore = req.body.openToStore;
                asset.thumbnail = req.body.thumbnail;
                asset.images = JSON.stringify(req.body.images);
                asset.content = req.body.content;
                asset.price = req.body.price;
                asset.license = req.body.license;
                return res.status(200).end();
              });
            }else{
              return res.status(400).end('You are not own this asset');
            }
          }else{
            return res.status(400).end('Target not found');
          }
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.put('/html/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'custom asset html update');
      if(!!req.signedCookies.user){
        if(!!req.body.assetId&&realm.objects('AssetScript').filtered('id=$0',req.body.assetId).length>0){
          let asset = realm.objects('Asset').filtered('id=$0',req.body.assetId);
          if(asset.user===JSON.parse(req.signedCookies.user).id){
            return realm.write(()=>{
              realm.objects('AssetScript').filtered('id=$0',req.body.assetId).html = req.body.html;
              return res.status(200).end();
            });
          }else{
            return res.status(400).end('You are not own this asset');
          }
        }else{
          return res.status(400).end('Target not found');
        }
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.put('/css/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'custom asset css update');
      if(!!req.signedCookies.user){
        if(!!req.body.assetId&&realm.objects('AssetScript').filtered('id=$0',req.body.assetId).length>0){
            let asset = realm.objects('Asset').filtered('id=$0',req.body.assetId);
            if(asset.user===JSON.parse(req.signedCookies.user).id){
              return realm.write(()=>{
                realm.objects('AssetScript').filtered('id=$0',req.body.assetId).css = req.body.css;
                return res.status(200).end();
              });
            }else{
              return res.status(400).end('You are not own this asset');
            }
        }else{
          return res.status(400).end('Target not found');
        }
      }else{
        return res.status(400).end('You need login');
      }
    });

    router.put('/js/', (req, res)=>{
    console.log(colors.green('[REQ]'),getIP(req), 'custom asset js update');
      if(!!req.signedCookies.user){
        if(!!req.body.assetId&&realm.objects('AssetScript').filtered('id=$0',req.body.assetId).length>0){
          let asset = realm.objects('Asset').filtered('id=$0',req.body.assetId);
          if(asset.user===JSON.parse(req.signedCookies.user).id){
            return realm.write(()=>{
              realm.objects('AssetScript').filtered('id=$0',req.body.assetId).js = req.body.js;
              return res.status(200).end();
            });
          }else{
            return res.status(400).end('You are not own this asset');
          }
        }else{
          return res.status(400).end('Target not found');
        }
      }else{
        return res.status(400).end('You need login');
      }
    });



    router.post('/image', (req, res) => {
      console.log(colors.green('[REQ]'),getIP(req), 'custom asset thumbnail update');
        let value = req.body.data;
        let name = new Date().getTime()+'.';
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
        }else if(header.includes('gif')){
          name += 'gif';
          value = value.replace(/^data:image\/gif;base64,/, "");
          check = true;
        }
      if(check){
        return require("fs").writeFile(path.join(__dirname, '../../public/resources/storeimage/'+name), value, 'base64', function(err) {
          if(err){
            console.log(err);
            return res.status(400).end();
          }else{
            return res.status(200).end('/assetimage/'+name);
          }
        });
      }else{
        return res.status(400).end();
      }
    });

    return router;

}
