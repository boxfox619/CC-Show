const express = require('express');
const colors = require('colors');
const Realm = require('realm');

const UserSchema = {
    name: 'User',
    primaryKey: 'key',
    properties: {
        key: 'string',
        id: { type: 'string', optional: true },
        password: { type: 'string', optional: true },
        nickname: 'string'
    }
};

module.exports = function () {

    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();

    router.get('/', (req, res) => {
        console.log('tesata');
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

    router.post('/register/', (req, res) => {
        console.log(colors.green('[REQ]'), 'register', getIP(req));

        return res.json({ number: 22 });
    });

    return router;
};