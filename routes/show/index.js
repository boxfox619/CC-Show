module.exports = function (app) {

    var Show = require('/models/show');

    app.post('/show/upload', function (req, res) {
        var show = new Show();
        show.code = req.body.showCode;
        show.data = req.body.showData;

        user.save(function (err) {
            if (err) {
                console.error(err);
                res.status(500).send('Upload failed!');
            } else
                res.status(200).send('Upload success!');
            res.end();
        });
    });
}