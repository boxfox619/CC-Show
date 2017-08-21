const express = require('express');

const app = express();

let port = 3000;

app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => {
    return res.send('Can you hear me?');
});

// import posts from './routes/posts';
// app.use('/posts', posts);


const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});