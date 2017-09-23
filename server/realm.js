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
    images: {type: 'string', default: JSON.stringify([])},
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

const SimpleAssetSchema = {
  name: 'SimpleAsset',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true },
    user: {type: 'string', default: 'rlatjdfo112@naver.com'},
    title: {type: 'string', default: '이름없는 에셋'},
    star: {type: 'int', default: 5},
    thumbnail: {type: 'string', default: '/images/ic_cc_show.png'},
    html: {type: 'string', default: '<div class="test"></div>'},
    css: {type:'string', default: '.test{ width: 100px; height: 200px; background: red;}'},
    js: {type: 'string', default: ''}
  }
}


const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    key: {type: 'string'},
    id: {type: 'string'},
    password: {type: 'string', optional: true},
    nickname: 'string'
  }
};

// const SlideSchema = {
//   name: 'Slide',
//   primaryKey: 'id',
//   properties: {
//       name: {type:'string' },
//       id: {type:'int'},
//       thumbnail: {type:'string', default: ''},
//       note: {type:'string', default: ''},
//       selectedAsset: {type: 'string', optional: true},
//       assetIdCount: {type: 'int', default: 0},
//       assets: {type:'string', default:'[]'}
//   }
// }

const ShowSchema = {
  name: 'Show',
  primaryKey: 'id',
  properties: {
    id: {type:'string'},
    user: {type: 'string'},
    name: {type: 'string', default:'새 발표자료1'},
    sizeUnit: {type: 'string', default:'px'},
    positionUnit: {type: 'string', default: 'px'},
    selectedSlide: {type: 'int', default: 0},
    slideIdCount: {type: 'int', default:0},
    slides: {type: 'string', default: '[]'}
  }
}

const realm = new Realm({schema: [UserSchema, AssetSchema, ShowSchema, SimpleAssetSchema ]});

module.exports = realm;
