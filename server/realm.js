const Realm = require('realm');

const AssetSchema = {
  name: 'Asset',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true },
    view: {type: 'int', default: 0},
    title: {type: 'string', default: ''},
    subTitle: {type: 'string'},
    date: {type: 'date'},
    star: {type: 'float', default: 0},
    openToStore: {type: 'bool', default: false},
    thumbnail: {type: 'string', default: ''},
    images: {type: 'string', default: JSON.stringify([]])},
    content: {type: 'string', default: ''},
    price: {type: 'int', default: 0},
    license: {type: 'string', default: ''}
  }
};

const AssetScriptSchema = {
  name: 'AssetScript',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true },
    html: {type: 'string', default: ''},
    css: {type:'string', default: ''},
    js: {type: 'string', default: ''}
  }
}

const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    key: {type: 'string'},
    id: {type: 'string', optional: true},
    password: {type: 'string', optional: true},
    nickname: 'string'
  }
};


const realm = new Realm({schema: [UserSchema, AssetSchema]});

module.exports = realm;
