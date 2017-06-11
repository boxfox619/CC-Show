module.exports = function(app)
{
    app.get('/', function(req,res){
        
        res.end();
    });

    app.get('/api/books/:book_id', function(req, res){
        res.end();
    });

    app.get('/api/books/author/:author', function(req, res){
        res.end();
    });

    app.post('/api/books', function(req, res){
        res.end();
    });

    app.put('/api/books/:book_id', function(req, res){
        res.end();
    });

    app.delete('/api/books/:book_id', function(req, res){
        res.end();
    });

}
