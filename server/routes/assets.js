const express = require('express');
var path = require('path');

module.exports = function(realm) {

  const router = express.Router();
      router.post('/image', (req, res) => {
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
          return require("fs").writeFile(path.join(__dirname, '../../public/resources/assetimage/'+name), value, 'base64', function(err) {
            if(err){
              console.log(err);
              return res.status(400).end();
            }else{
              console.log('/assetimage/'+name);
              return res.status(200).end('/assetimage/'+name);
            }
          });
        }else{
          return res.status(400).end();
        }
      });

  return router;
}
