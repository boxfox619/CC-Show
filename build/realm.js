const Realm = require('realm');

const AssetSchema = {
  name: 'Asset',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', indexed: true },
    view: { type: 'int', default: 0 },
    title: { type: 'string' },
    subTitle: { type: 'string' },
    date: { type: 'date' },
    star: { type: 'float', default: 0 },
    openToStore: { type: 'bool' },
    thumbnail: { type: 'string' },
    images: { type: 'string' },
    content: { type: 'string' },
    price: { type: 'int' },
    license: { type: 'string' }
  }
};

const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    key: { type: 'string' },
    id: { type: 'string', optional: true },
    password: { type: 'string', optional: true },
    nickname: 'string'
  }
};

const realm = new Realm({ schema: [UserSchema, AssetSchema] });

module.exports = realm;