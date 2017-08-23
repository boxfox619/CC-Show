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

    router.post('/login/', (req, res) => {
        console.log(colors.green('[REQ]'), 'login', getIP(req));

        return res.json({ number: 123 });
    });

    router.post('/register/', (req, res) => {
        console.log(colors.green('[REQ]'), 'register', getIP(req));

        return res.json({ number: 22 });
    });

    return router;
};