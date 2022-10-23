const http = require('http');
const Productcontroller = require('./controllers/productController');

const port = 3000;

const server=http.createServer(function(req, res) {
    if(req.url === '/api/products'){
       Productcontroller.getAll(req,res);
    } else {
        res.writeHead(404,{'content-type': 'application/json'})
        res.end(JSON.stringify ({message :'Route not found'}))

    }
});

server.listen(port,function(error) {
    if(error){
        console.log('something went wrong', error);
    } else {
        console.log('Server is up');
    }

});
